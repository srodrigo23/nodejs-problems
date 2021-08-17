//Godar 3020
const readline = require("readline");

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,   
})

let values;
r.on("line", (line) => {
    values = line.split(' ')
    let cadAns = fib(parseInt(values[2]), values[0], values[1], new Array(90));
    console.log(cadAns.charAt(values[3]-1));
    r.close();
})

function fib (index, p, u, cache){
    if(cache[index]) return cache[index];
    else{
        if(index == 1) return p;
        else 
            if(index == 2) return u;
            else cache[index] = fib(index-2, p, u, cache) + fib(index-1, p, u, cache)
    }
    return cache[index];
}