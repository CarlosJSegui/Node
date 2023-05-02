async function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Hola " + nombre);
            resolve(nombre);
        }, 1000);
    });
}

async function hablar(nombre) {
    return new Promise ((resolve, reject) => {
        setTimeout(function() {
            console.log("Bla bla bla bla ...");
            resolve(nombre);
            reject("hay un error")
        }, 1000)
    })
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("adios: " + nombre);
            resolve(nombre);
        }, 1000);
    });
}

async function main() {
    let nombre = await hola("Carlos");
    await hablar();
    await hablar();
    await adios(nombre);
}

main()