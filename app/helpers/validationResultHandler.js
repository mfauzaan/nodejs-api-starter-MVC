const { validationResult } = require('express-validator/check');

exports.validationResultHandler = (req, res, next) => {
  try {
    const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {
      // Build your resulting errors however you want! String, object, whatever - it works!
      return { code: "FIELD_REQUIRED", parameter: param, message: msg };
    }

    const result = validationResult(req).formatWith(errorFormatter);
    if (!result.isEmpty()) {
      // Response will contain something like
      // { errors: [ "body[password]: must be at least 10 chars long" ] }
      return res.status(422).json({ errors: result.array() });
    }

    next();
  } catch (e) {
    res.status(422).json({ errors: e.mapped() });
  }
};