const Joi = require('joi');

const userSchemas = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.number().min(6).required(),
  image: Joi.string(),
});

module.exports = {
  userSchemas,
};