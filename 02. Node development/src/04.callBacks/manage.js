const data = [
  {
    id: 1,
    name: "carlos",
    edad: 11,
  },
  {
    id: 2,
    name: "juan",
    edad: 23,
  },
  {
    id: 3,
    name: "pedro",
    edad: 18,
  },
  {
    id: 4,
    name: "kevin",
    edad: 40,
  },
  {
    id: 5,
    name: "arturo",
    edad: 22,
  },
];

function getUsersById(id, callBack) {
  const user = data.find((user) => user.id === id);
  if (!user) {
    return callBack(`User with id ${id} isn't not founded`);
  }
  return callBack(null, user);
}

module.exports = {
  getUsersById,
};
