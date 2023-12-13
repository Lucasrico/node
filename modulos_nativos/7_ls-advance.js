//Mostrar en consola 

const fs = require("node:fs/promises")
const path = require("node:path")
const process = require("node:process")

const folder = process.argv[2] ?? ".";

//

async function ls(folder) {
    let files
    try {
        files = await fs.readdir(folder);
    } catch (err) {
        console.log("Error al leer el directorio" + folder, err);
        process.exit(1);
    }

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

    const fileseInfo = await Promise.all(filesPromises);

    fileseInfo.forEach(file => console.log(file));
}

ls(folder);