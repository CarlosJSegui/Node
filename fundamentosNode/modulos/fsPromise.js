const fs = require('fs').promises;

async function read(path) {
    try {
        console.log("leyendo...")
        const data = await fs.readFile(path);
        return data.toString();
    } catch (err) {
        console.log("No se ha leido el archivo")
    }
}


async function write(path, content) {
    try {
        await fs.writeFile(path, content);
        console.log("Se ha escrito")
    } catch (err) {
        console.log('No se ha podido escribir');
    }
}

async function borrar(path) {
    try {
        console.log("Deleting");
        await wait();
        await fs.unlink(path);
    } catch (err) {
        console.log("no se ha podido eliminar");
    }

}

function wait() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('...')
            res();
        }, 2000);
    })
}


async function main() {
    try {
        const data = await read(__dirname + '/archivo.txt');
        console.log(data)
        console.log('Termina lec')
        await write(__dirname + '/arch1.txt', "Soy un nuevo archivo")
        console.log('Espera...')
        await wait();
        await wait();
        await borrar(__dirname + '/arch1.txt');
        console.log('Eliminado')
    } catch (err) {
        console.log(err)
    }
}
//main();