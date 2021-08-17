//poligonos
//Juego con cadenas
const readline = require("readline");

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,   
})

r.on("line", (line) => {
    console.log((1+Math.sqrt(1 + 8 * (parseInt(line))))/(2))
    r.close()
})
