'use strict'

const express = require('express');
const router = express.Router();

// Post Routes
router.get('/api/v1/posts', require('../app/controllers/PostController').index);
router.post('/api/v1/posts', require('../app/controllers/PostController').store);

module.exports = router;