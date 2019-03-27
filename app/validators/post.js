const { body } = require('express-validator/check')

exports.validate = (method) => {

  switch (method) {
    case 'store': {
      return [
        body('title', 'This action requires the field to be specified').exists(),
        body('content', 'This action requires the field to be specified').exists()
      ]
    }

    case 'update': {
      return [
        body('title', 'This action requires the field to be specified').exists(),
        body('content', 'This action requires the field to be specified').exists(),
      ]
    }
  }
}