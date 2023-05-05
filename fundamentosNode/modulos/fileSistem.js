const { log } = require('console');
const fs = require('fs');

function leer(ruta, callback) {
    fs.readFile(ruta, 'utf8', (err, data) => {
        console.log(data); // tambien se puede poner data.toString y no pasar "utf8" como parametro
    })
}

function escribir(ruta, contenido, callback) {
    fs.writeFile(ruta, contenido, (err) => {
        if(err) {
            console.error("No he podido escribir", err);
        } else {
            console.log("Todo bien");
        }
    })
}

function borrar(ruta, callback) {
    fs.unlink(ruta, (err) => {
        if(err) {
            console.error("No se pudo borrar", err);
        } else {
            console.log("Se borró");
        }
    })
}

//leer(__dirname + "/archivo.txt", console.log);

//escribir(__dirname + "/archivo1.txt", "Soy un nuevo archivo", console.log)

//borrar(__dirname + "/archivo1.txt")
