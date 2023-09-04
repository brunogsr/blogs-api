const { Category } = require('../models');

const createCategory = async (name) => {
  const newCategory = await Category.create({ name });
  return { status: 201, data: newCategory };
};

const getAll = async () => {
  const categories = await Category.findAll();
  return { status: 200, data: categories };
};

module.exports = {
  createCategory,
  getAll,
};
