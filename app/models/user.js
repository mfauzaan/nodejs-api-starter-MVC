'use strict'

var bcrypt = require('bcrypt-nodejs')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING

  }, {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }, {
/*       instanceMethods: {
        generateHash(password) {
          return bcrypt.hash(password, bcrypt.genSaltSync(8));
        },
        validPassword(password) {
          return bcrypt.compare(password, this.password);
        },
        findByUsername: function(name) {
          console.log(name)
        }
      } */
    });
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};