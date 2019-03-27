'use strict'

const express = require('express');
const router = express.Router();

// Configuration
const apiVersion = 1
const apiPrefix = `/api/v${apiVersion}`

// Import Middlewares
const auth = require('../app/middleware/auth');

// Import Routes
var postRoute = require('./posts');

/* Home Route */
router.get('/', function(req, res) {
  // Send details of the Appilcation to Homescreen
  res.send({ application: 'Nodejs API - MVC', version: 1, owner: 'https://nodejs.orgß' })
});

// Mount Routes
router.use(`${apiPrefix}`, postRoute);

module.exports = router;