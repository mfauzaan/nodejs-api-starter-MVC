'use strict'

//const replace = require('replace-in-file');
async function makeController() {
  var fs = require('fs').promises

  try {
    await fs.writeFile(`app/controllers/${process.argv[2]}.js`, `'use strict';

const { Post } = require('../models');

class ${process.argv[2]} {
  /**
  * Display a listing of the posts.
  */
  async index(req, res) {
   // Code Here
  }


  /**
   * Display the specified post.
   */
  async show(req, res) {
    // Code Here
  }


  /**
   * Store a newly created post in DB.
   */
  async store(req, res) {
    // Code Here
  }


  /**
   * Update the specified post in DB.
   */
  async update(req, res) {
    // Code Here
  }

  
  /**
   * Remove the specified post from DB.
   */
  async destroy(req, res) {
    // Code Here
  }
}

module.exports = new ${process.argv[2]}()
`)
  } catch (error) {
    console.log('Failed to create controller:\n', error)
  }
}

makeController().catch((err) => {
  console.error(err);
});