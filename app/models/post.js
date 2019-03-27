'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    image_url: DataTypes.STRING
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    getterMethods: {
      image_url: function () {
        if (!this.getDataValue('image_url')) {
          return this.getDataValue('image_url')
        } else {
          return process.env.IMAGE_BASE_URL+this.getDataValue('image_url')
        }
      }
  },
  });
  Post.associate = function(models) {
    // associations
      Post.hasMany(models.Comment, {
        foreignKey: 'post_id',
      });
  };
  
  return Post;
};


