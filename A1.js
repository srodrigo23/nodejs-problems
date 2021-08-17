const readline = require("readline");
const { exit } = require("process");

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,   
})


let numLines = 0, cont = 0;
let isFirst = true;

let ans = 0;
r.on("line", (line) => {
    if(isFirst)
    {
        numLines = parseInt(line);
        isFirst = false;
    } 
    else
    {
        
        ans = ans + parseInt(line);
        cont++;
        
        if(cont  == numLines){
            console.log(ans);
            r.close()
        }
    }
})