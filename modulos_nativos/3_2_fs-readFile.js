const fs = require("node:fs");

console.log("Leyendo el primer archivo");
fs.readFile("./archivo.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log("Primer archivo: ", data);
})

console.log("Haciendo cosas mientras se lee el primer archivo...")

console.log("Leyendo el segundo archivo...");
fs.readFile("./archivo2.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log("Segundo archivo: ", data)
})

//Aqui ya si lo leemos de forma ASÍNCRONA.
//Igual que las querys de mysql, como no sabemos cuanto va a tardar
//en resolverse, le pasamos a la funcion un callback

//La estructura es:

//fs.readfile("ruta al archivo", "formato", CALLBACK)
//Donde callback es una funcion que se ejecutará CUANDO SE HAYA TERMINADO DE LEER EL ARCHIVO

//Esa funcion, en general para cualquier callback, en vez de definirla fuera de la funcion asincrona y pasarla luego como parametro,
//la podemos crear en el mismo parámetro:

// (err, data) ==> {lo que haga la funcion}

//Por eso se llaman funciones anonimas o funciones flecha, porque no se definen fuera para luego usarlas, si no que la estamos creando a la vez que la llamamos.

//Con todo esto, al meter la funcion anonima como tercer parametro, queda la estructura anterior:

/*

fs.readFile("./archivo2.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log("Segundo archivo: ", data)
})

*/