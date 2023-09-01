const errors = {
  'string.base': 400,
  'number.min': 400,
  'string.min': 400,
  'any.required': 400,
  'string.email': 400,
};

const errorMap = (errorType) => errors[errorType] || 500;

module.exports = errorMap;
