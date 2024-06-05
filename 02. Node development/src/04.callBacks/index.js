const { getUsersById } = require("./manage");

getUsersById(4, (error, user) => {
  if (error) throw new Error("This finished here");

  console.log({ user });
});
