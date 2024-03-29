const model = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      foreignKey: true,
      primaryKey: true,
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      foreignKey: true,
      primaryKey: true,
    },
  }, {
    underscored: true,
    tableName: 'posts_categories',
    timestamps: false,
  });
    PostCategory.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
        through: PostCategory,
        foreignKey: 'postId',
        as: 'categories',
        foreignKey: 'postId',
        otherKey: 'categoryId',
      });
      models.Category.belongsToMany(models.BlogPost, {
        through: PostCategory,
        foreignKey: 'categoryId',
        as: 'blogPosts',
        foreignKey: 'categoryId',
        otherKey: 'postId',
      });
    };

  return PostCategory;
};

module.exports = model;