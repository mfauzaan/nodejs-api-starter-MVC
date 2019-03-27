'use strict'

// Declarations
var express = require('express');
var router = express.Router();
var slugify = require('slugify')

// Image Upload
var multer = require('multer')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + slugify(file.originalname, '_'))
  }
})

var upload = multer({ storage })

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
*/
// Declare Controller
const PostController = require('../app/controllers').post;
const auth = require('../app/middleware/auth')
const PostValidator = require('../app/validators/post')
const validationResultHandler = require('../app/helpers/validationResultHandler')

// Resource Routes of Posts
router.get('/posts', auth.basic, PostController.index);
router.get('/posts/:id', auth.basic, PostController.show);
router.post('/posts', [upload.single('image'), PostValidator.validate('store'), validationResultHandler.validationResultHandler, auth.basic], PostController.store);
router.put('/posts/:id', [upload.single('image'), PostValidator.validate('update'), validationResultHandler.validationResultHandler, auth.basic], PostController.update);
router.delete('/posts/:id', auth.basic, PostController.destroy);

module.exports = router;
