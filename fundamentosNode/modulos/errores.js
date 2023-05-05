// console.clear();

function otraFuncion() {
    seRompe();
}

function seRompe() {
    return 3 + z;
}

function seRompeAsincrona(cb) {
    setTimeout(function () {
        try {
            return 3 + z;
        } catch(err) {
            console.error("Error en la función asincrona ");
            cb(err);
        }
    })
}

try{
    //otraFuncion();
    seRompeAsincrona(function(err) {
        console.log("Hay error");
        console.error(err.message);
    });
} catch(err) {
    console.error("se rompió??!!");
    console.error(err.message);
}

console.log("Vamos a ver que pasa ahora");