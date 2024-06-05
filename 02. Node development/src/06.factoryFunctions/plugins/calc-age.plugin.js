const getAget = require("get-age");

const calculateAge = (date) => getAget(date);

module.exports = {
  calculateAge,
};
