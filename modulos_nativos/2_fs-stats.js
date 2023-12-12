//fs para gestion de archivos
//fs.statSync metodo del fs de node para obtener informacion de manera sincrona y bloqueante. Devuelve fs.Stats, objeto con detalles del archivo;

const fs = require("node:fs");

//El objeto que devuelve tiene varios metodos. Uno de ellos es statSync, que al pasarle como paraetro un archivo DEVUELVE otro objeto más.

//Este lo asignamos a stats. Así ahora stats es un objeto con nuevos metodos.


const stats = fs.statSync('./archivo.txt');

//Estos metodos en concreto hacen varias cosas. Los que vamos a ver devuelven true o false (excepto .size, que devuelve el tamaño).

console.log(
    // stats.isFile(), // Si es un fichero
    // stats.isDirectory(), //Si es un directorio
    // stats.isSymbolicLink(), //Si es un enleace simbolico
    // stats.size //Tamaño en bytes (coincide en caracteres ascii)
);