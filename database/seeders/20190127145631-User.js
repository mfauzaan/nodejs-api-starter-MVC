'use strict';
var bcrypt = require('bcrypt-nodejs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Create Users Using Seed
    var password = await bcrypt.hashSync('secret', bcrypt.genSaltSync(10))

    return queryInterface.bulkInsert('users', [{
      username: 'Tim',
      password,
      created_at: Sequelize.literal('NOW()'),
      updated_at: Sequelize.literal('NOW()')
    },{
      username: 'Gibson',
      password,
      created_at: Sequelize.literal('NOW()'),
      updated_at: Sequelize.literal('NOW()')
    },{
      username: 'Fauzaan',
      password,
      created_at: Sequelize.literal('NOW()'),
      updated_at: Sequelize.literal('NOW()')
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    // Reverse Users
    return queryInterface.bulkDelete('users', null, {})
  }
};
