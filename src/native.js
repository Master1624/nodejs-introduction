const fs = require("fs");

const data = fs.readFileSync("example.txt", "utf-8");

console.log("File content:", data);
