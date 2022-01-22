module.exports = (operation) => (req, res, next) => {
  Promise.resolve(operation(req, res, next)).catch(next);
};
