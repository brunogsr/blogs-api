const categoriesService = require('../services/categories.service');

const createCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const category = await categoriesService.createCategory(name);
  return res.status(category.status).json(category.data);
};

module.exports = {
  createCategory,
};