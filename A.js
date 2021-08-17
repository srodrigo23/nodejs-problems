const readline = require("readline");
const { exit } = require("process");

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,   
})

let c = 0;

r.on("line", (line) => {
    if(c < 3){
        console.log("Tu escribiste", line, "y estas en la linea", c)    
    }else{
        exit();
    }
    c++;
})