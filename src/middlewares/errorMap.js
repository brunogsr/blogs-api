const errors = {
  'any.string': 400,
  'any.required': 400,
};

const errorMap = (error) => {
  const { details } = error;
  const { message } = details[0];
  const code = errors[details[0].code];
  return { message, code };
};

module.exports = {
  errorMap,
};