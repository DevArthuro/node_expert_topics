const fs = require("fs");

const readFile = fs.readFileSync("./REACT.md", "utf-8");

console.log(readFile.length); // Count letters
console.log(readFile.split(" ").length); // Count words

// Fist option find specifict word
console.log(readFile.match(/react/gi).length); // Count how many times React is wrote

// Second option find specifict word
console.log(
  readFile.split(" ").filter((word) => word.toLowerCase().includes("react"))
    .length
);
