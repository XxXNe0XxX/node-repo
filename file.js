const { readFileSync, writeFileSync} = require("fs")

const first = readFileSync("./Node/content/subfolder/second.txt", "utf8")
console.log(first)
