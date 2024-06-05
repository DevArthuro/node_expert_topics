const { calculateAge, generateId } = require("./plugins");

// Invocamos varios adapter pero en un solo lugar y los inyectamos por dependencia

// Esta funcion nos da la facilidad de usar varias funcionalidades

function users(uuid, age) {
  // En este caso guarda el usuario de hay derecho en la db
  function createUser(obj) {
    console.log("Creando user");
    return obj;
  }

  // Retornamos una funcion que nos va invocar las inyecciones de dependencias
  return (obj) =>
    createUser({
      ...obj,
      id: uuid(),
      age: age(obj.date),
    });
}

// Creamos una intancia de nuestra fabrica
const intanceCreateUser = users(generateId, calculateAge);

// Exportamos la funcion que exponemos para el registro
module.exports = {
  createUser: intanceCreateUser,
};
