// function soyAsincrona(miCallback) {
//     setTimeout(() => {
//         console.log("Hola, soy una función asincrona");
//         miCallback();
//     }, 1000);
// }

// console.log("Iniciando proceso...");

// soyAsincrona(function () {
//     console.log("Terminando proceso...");
// });

function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log("Hola " + nombre);
        miCallback(nombre);
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log("adios: " + nombre);
        otroCallback();
    }, 1000);
}

console.log("Iniciando proceso...");

hola("Carlos", function (nombre) {
    adios(nombre, function () {
        console.log("... terminando proceso.");
    })
})