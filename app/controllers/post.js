'use strict';

const Post = require('../models').Post;
const Comment = require('../models').Comment;

// Exports CRUD Operations as Post Controller
module.exports = {

  /**
   * Display a listing of the posts.
   */
  async index(req, res) {
    // Query All Posts in the Database
    const posts = await Post.findAll()

    // Send response to the route
    res.send(posts)
  },


  /**
   * Display the specified post.
   */
  async show(req, res) {
    // Find required parameter
    const { id } = req.params

    // Query Post using parameter ID
    const post = await Post.findByPk(id)

    // Send request to Database
    res.send(post)
  },


  /**
   * Store a newly created post in DB.
   */
  async store(req, res) {
    // Get required parametrs
    const { title, content } = req.body
    // if file name not found use null
    try {
      var image_url = `/${req.file.filename}`
    } catch (error) {
      var image_url = null
    }

    // perform Create Query
    const post = await Post.create({
      user_id: req.auth.id,
      title,
      content,
      image_url
    })

    // Return response
    res.status(200).json({ message: 'Post has been added successfully', data: post });
  },

  /**
   * Update the specified post in DB.
   */
  async update(req, res) {
    try {
      // Get required Body
      const { title, content } = req.body
      const { id } = req.params
      // Find Post from Database
      const post = await Post.findByPk(id)

      try {
        var image_url = `/${req.file.filename}`
      } catch (error) {
        var image_url = `/${post.image_url}`
      }

      // Perform Update request
      await post.update({
        title, content, image_url
      })

      // Perform update request
      res.status(200).json({ message: 'Post has been updated successfully', data: post });
    } catch (error) {
      res.status(500).json({
        errors:
        {
          "code": "UPDATE_FAILED",
          "message": "The post could not be updated",
        }
      })
    }

  },

  /**
   * Remove the specified post from DB.
   */
  async destroy(req, res) {
    try {
      // Get Required parameters
      const { id } = req.params

      // Query post using provided id
      const post = await Post.findByPk(id)

      // Delete post
      await post.destroy()
      // Delete Related comments
      await Comment.destroy({ where: { post_id: null }})

      // return response
      res.status(200).json({ message: 'Post has been deleted successfully', data: post });
    } catch (error) {
      res.status(500).json({
        errors:
        {
          "code": "DELETION_FAILED",
          "message": "The post could not be deleted",
        }
      })
    }
  }
};