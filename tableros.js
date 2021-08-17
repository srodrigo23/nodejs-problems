const readline = require("readline");
const { exit } = require("process");

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,   
})


let numBoards = 0, cont = 0;
let isFirst = true;

let dimBoard = 0;
r.on("line", (line) => {
    if(isFirst)
    {
        numBoards = parseInt(line);
        isFirst = false;
    } 
    else
    {        
        dimBoard =  parseInt(line);
        console.log(getNumberSquares(dimBoard))
        cont++;
              
        if(cont  == numBoards){
            r.close()
        }
    }
})

function getNumberSquares(dim){
    let ans = 0;
    for(let i = dim; i>= 1; i--){
        ans = ans + (i * i);
    }
    return ans;
}