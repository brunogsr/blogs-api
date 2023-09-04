const categoriesService = require('../services/categories.service');

const createCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const category = await categoriesService.createCategory(name);
  return res.status(category.status).json(category.data);
};

const getAll = async (_req, res) => {
  const categories = await categoriesService.getAll();
  return res.status(categories.status).json(categories.data);
};

module.exports = {
  createCategory,
  getAll,
};