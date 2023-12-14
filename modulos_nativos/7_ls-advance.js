//Mostrar en consola la lista de archivos y carpetas del directorio que el usuario quiera
const fs = require("node:fs/promises")
const path = require("node:path")
const process = require("node:process")
const pc = require("picocolors")

// Guardamos en la variable "folder" la ruta que escriba el usuario al ejecutar el programa
// (El usuario escribe node nombredelarchivo.js ruta)

// EL metodo process.argv devuelve (return) UN ARRAY con las palabras que hemos escrito en la consola al lanzar el programa
// Por lo tanto process.argv[0] y process.argv[1] ya estan ocupadas, con "node" y con "nombredelarchivo"
// Para guardar la "ruta" y meterla en la const folder, la llamamos desde proces.argv[2]

// const folder = process.argv[2];

// Para asegurarnos de que el usuario no deje el valor vacio y folder sea undefined, controlamos que si es undefined
// la cambie por un punto (Si la ruta es un punto, el programa cogera los archivos de su misma carpeta)

const folder = process.argv[2] ?? ".";


// Como vamos a usar funciones que devuelven promesas y vamos a gestionarlas con await, tenemos que envolver todo en
// una funcion asincrona, y luego la ejecutaremos en la ultima linea con "ls(folder)".

async function ls(folder) {
    let files

    try {
        //El metodo readdir acepta una ruta como parametro y devuelve un array con los nombres de los archivos de esa carpeta, lo guardamos en files.
        files = await fs.readdir(folder);
    } catch (err) { //Controlar el error
        console.log("Error al leer el directorio " + folder, err);
        process.exit(1);
    }
    //Ahora vamos a crear una promesa
    const filesPromises = files.map(async file => {
        const filePath = path.join(folder, file);
        let stats;
        try {
            stats = await fs.stat(filePath) // informacion del archivo
        } catch (err) {
            console.log(`Error al leer el archivo ${filePath}`);
            process.exit(1);
        }
        const isDirectory = stats.isDirectory();
        const fileType = isDirectory ? "d" : "f";
        const fileSize = stats.size.toString();
        const fileModified = stats.mtime.toLocaleString();

        return `${fileType} ${file.padEnd(20)} ${fileSize.padStart(10)} ${fileModified}`
    })

    const filesInfo = await Promise.all(filesPromises);

    filesInfo.forEach(file => console.log(file));
}

ls(folder);