// Callback Hell

// function hola(nombre, miCallback) {
//     setTimeout(function () {
//         console.log("Hola " + nombre);
//         miCallback(nombre);
//     }, 1000);
// }

// function hablar(callbackHablar) {
//     setTimeout(function() {
//         console.log("Bla bla bla bla ...");
//         callbackHablar();
//     }, 1000)
// }

// function adios(nombre, otroCallback) {
//     setTimeout(() => {
//         console.log("adios: " + nombre);
//         otroCallback();
//     }, 1000);
// }

// - - - Llamando - - -

// console.log("Iniciando proceso...");

// hola("Carlos", function (nombre) {
//     hablar(function() {
//         hablar(function() {
//             hablar(function() {
//                 hablar(function() {        
//                     adios(nombre, function () {
//                         console.log("... terminando proceso.");
//                     })
//                 })
//             })
//         })
//     })
// })

// Como se hace

function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log("Hola " + nombre);
        miCallback(nombre);
    }, 1000);
}

function hablar(callbackHablar) {
    setTimeout(function() {
        console.log("Bla bla bla bla ...");
        callbackHablar();
    }, 1000)
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log("adios: " + nombre);
        otroCallback();
    }, 1000);
}

function conversacion(nombre, veces, callback) {
    if(veces > 0) {
        hablar(function() {
            conversacion(nombre, --veces, callback);
        })
    } else {
        adios(nombre, callback);
    }
}

console.log("Iniciando proceso...");
hola("Carlos", function (nombre) {
    conversacion(nombre, 2, function() {
        console.log("... terminamos proceso.");
    })
})