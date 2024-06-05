const { v4: uuid4 } = require("uuid");

const generateId = () => uuid4();

module.exports = {
  generateId,
};
