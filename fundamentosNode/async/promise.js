function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Hola " + nombre);
            resolve(nombre);
        }, 1000);
    });
}

function hablar(nombre) {
    return new Promise ((resolve, reject) => {
        setTimeout(function() {
            console.log("Bla bla bla bla ...");
            // resolve(nombre);
            reject("hay un error")
        }, 1000)
    })
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("adios: " + nombre);
            resolve(nombre);
        }, 1000);
    });
}

// - - - 
console.log("Iniciando el proceso...");

hola("Carlos")
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log("...Terminado el proceso");
    })
    .catch(error => {  // Para manejar los errores Ej: console.error("Ha habido un error")
        console.error("Ha habido un error");
        console.error(error);
    }) 
