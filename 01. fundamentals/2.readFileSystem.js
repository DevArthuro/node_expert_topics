const fs = require("fs");

// Read files depends it execute detect the file example
// If execute node inside this folder detect the file if u away folder is no detected
const data = fs.readFileSync("README.md", "utf8"); // Read files

// ig -> sensitive case, Replace javaScript por node in whole text
const newData = data.replace(/JavaScript/gi, "Node");

// It create new FIle with edition
fs.writeFileSync("README-with-corrections.md", newData);
