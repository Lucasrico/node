const fs = require("node:fs/promises");

//Al llamar al apartado "prmises" de "node:fs", podemos usar las promesas para manjear la funcion asincrona.
//Antes nos asegurabamos, pasandole un callback, de que la logica que nosotros queriamos hacer se ejecutara despues de la funcion asincrona

//Ahora podemos usar el .then al llamar a la funcion asincrona, en vez de ejecutar el callback, es otra forma de asegurarse de que la ejecucion se "espere" y no avance
//mientras el readFile coge los datos (notese el paralelismo con el fetch, donde ambas cosas:
/*
 1- Recuperan informacion,
 2- Tardan en hacerlo,
 3- Queremos hacer algo con esa informacion, pero asegurarnos de que lo haga DESPUES de que se haya completado la ejecucion asincrona.

 */

console.log("Leyendo el primer archivo");
fs.readFile("./archivo.txt", "utf-8")
    .then(data => {
        console.log("primer archivo :", data);
    })

console.log("mensaje de la mitad");


console.log("Leyendo el segundo archivo");

fs.readFile("./archivo2.txt", "utf-8")
    .then(data => {
        console.log("segundo archivo :", data);
    })

//Exactamente igual que cuando usabamos mysql. Ahora la funcion en vez de 3 parametros, siendo el 3º un callback, solo tiene los dos primeros.
//El parametro del callback se ha eliminado y se ha sustituido por el uso del ".then"

//El .then es otro metodo de las promesas, que acepta como parametro "la funcion" que antes era un callback.

//EL return (lo que devuelven) las promesas se maneja de una forma bastante diferente, mucha tela eso.