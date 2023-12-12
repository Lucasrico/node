const fs = require("node:fs");

//Aquí de nuevo creamos el objeto fs con require que inclye todos los metodos que vamos a ir usando.

console.log("Leyendo el primer archivo...");
const text = fs.readFileSync("./archivo.txt", "utf-8");
console.log("Primer archivo: ", text);
console.log("Haciendo cosas mientras leemos el archivo");
console.log("leyendo el segundo archivo...");
const text2 = fs.readFileSync("./archivo2.txt", "utf-8");
console.log("segundo archivo :", text2);

//Este metodo sirve para leer el archivo que le digamos
//Normalmente este tipo de metodos suelen ser asincronos, pero
//en este caso nos dan la opcion de usar readFileSync, que se comporta de forma sincrona
//(Aunque tarde en completarse, la ejecucion se detiene antes de avanzar)