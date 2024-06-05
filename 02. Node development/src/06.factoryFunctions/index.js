const { createUser } = require("./goodForm");

// Creamos usuarios de una manera facil y usando librerias externas

// Estos usuarios incluso ya se registraron en la db
const user1 = createUser({ name: "pablo", date: "1998-08-07" });
const user2 = createUser({ name: "Carlos", date: "2004-08-02" });
console.log(user1);
console.log(user2);
