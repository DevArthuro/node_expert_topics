// If the case uuid is deprecated just to change de generateId functions
const { calculateAge, generateId } = require("./plugins");

const fillAutomaticForm = ({ name, date }) => ({
  id: generateId(),
  name,
  age: calculateAge(date),
});

console.log(fillAutomaticForm({ name: "Pablo", date: "2004-08-02" }));

console.log(fillAutomaticForm({ name: "Carlos", date: "1998-10-02" }));
