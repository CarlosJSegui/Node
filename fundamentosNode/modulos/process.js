// const process = require('process');

process.on("exit", () => {
    console.log("El proceso acabó");
});

process.on("beforeExit", () => {
    console.log("El proceso va a terminar");
});

process.on("uncaughtException", (err, origen) => {
    console.log("Se nos ha olvidado capturar el error");
    console.log(err.message);
})

queNoExiste()

console.log("saldrá??");