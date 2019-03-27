'use strict'

module.exports.basic = async function (req, res, next) {
  var bcrypt = require('bcrypt-nodejs')
  const User = require('../models').User;
  // Grab the "Authorization" header.
  var authorization = req.get("authorization");

  // On the first request, the "Authorization" header won't exist, so we'll set a Response
  // header that prompts the browser to ask for a username and password.
  if (!authorization) {
    // show the Access Restricted error message.
    return res.status(401).json({
      "errors": [
        {
          "code": "AUTHORIZATION_REQUIRED",
          "message": "Performing this action on this resource requires authorization",
        }
      ]
    });
  } else {
    // If the user enters a username and password, the browser re-requests the route
    // and includes a Base64 string of those credentials.
    var credentials = new Buffer(authorization.split(" ").pop(), "base64").toString("ascii").split(":");
    
    try {
      const user = await User.findOne({ where: { username: credentials[0] } })

      if (credentials[0] === user.username && bcrypt.compareSync(credentials[1], user.password)) {
        // The username and password are correct, so the user is authorized.
        req.auth = user

        return next();
      } else {
        // The user typed in the username or password wrong.
        return res.status(401).json({
          "errors": [
            {
              "code": "AUTHENTICATION_FAILED",
              "message": "Used authentication credentials are invalid.",
            }
          ]
        });
      }
    } catch (error) {
      // The user typed in the username or password wrong.
      return res.status(401).json({
        "errors": [
          {
            "code": "AUTHENTICATION_FAILED",
            "message": "Used authentication credentials are invalid.",
          }
        ]
      });
    }
  }
};