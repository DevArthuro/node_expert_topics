// Esto es un archivo de barril es donde centralizamos los imports para mejor control
const { calculateAge } = require("./calc-age.plugin");
const { generateId } = require("./gen-id.plugin");

module.exports = {
  generateId,
  calculateAge,
};
