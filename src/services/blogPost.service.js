const { BlogPost, User, Category } = require('../models');

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { 
        model: User, 
        as: 'user', 
        attributes: { exclude: ['password'] }, 
      },
      { 
        model: Category, 
        as: 'categories', 
      },
    ],
    attributes: {
      exclude: ['user_id'],
    },
  });

  return { status: 200, data: posts };
};

module.exports = {
  getAll,
};
