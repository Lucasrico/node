const path = require("node:path");

console.log(path.sep);

const filePath = path.join('content', 'subfolder', 'archivo.txt');
console.log(filePath);
const base = path.basename('', '.txt');

//Un par de cosas mas que me faltan