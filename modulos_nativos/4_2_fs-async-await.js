const { readFile } = require("node:fs/promises");

(async () => {
    console.log("Leyendo el primer archivo");
    const text = await readFile("./archivo.txt", "utf-8")
    console.log("Primer archivo :", text);

    console.log("Haciendo cosas en medio");

    console.log("Leyendo segundo archivo");
    const text2 = await readFile("./archivo2.txt", "utf-8");
    console.log("Segundo archivo: ", text2);
})();


// Await se asegura de detener la ejecucion en la linea en la que aparece, hasta que se resuelve la promesa que lo precede.
//Así, en este codigo es importante usarlo, ya que "text" en la linea 5 va a ser undefined hasta que la promesa se resuelva y le
//meta un valor a "text"

//Esto es importante hacerlo porque, si no, mientras la linea 5 se queda ejecutando la promesa, y text por lo tanto valiendo aun undefined,
//pasaria el codigo a la linea 6 y haria un console.log de un dato que aun no sabemos (Se puede probar quitando el "wait" y viendo como falla el console.log)

//Como condicion indispensable, para usar await la funcion que lo envuelve debe ser tambien asincrona, para eso le ponemos async
//Esto hay que creerselo y punto, y buscqar la forma de hacerlo. De todas formas tiene cierta logica: Si el interior de la funcion tiene
//metodos que tardan en resolverse, la funcion que los envuelve tambien va a tardar, como minimo, lo que tarden esos metodos.

//PERO OJO
//EL USO DE ESM (EcmaScript Modules), QUE VIMOS EN LAS DIAPOSITIVAS QUE ERA ASINCRONO, NO REQUIERE
//DE UNA ENVOLTURA DE ASYNC PARA USAR AWAIT, PORQUE LA EJECUCION DE MJS ES ASINCRONA EN SÍ

//Lo vemos en el proximo ejercicio

//