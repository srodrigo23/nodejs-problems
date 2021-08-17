//Fraude
const readline = require("readline");

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,   
})

let lines = []
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
        lines.push(line);
        cont++;
        
        if(cont  == numLines*2){
            r.close()
        }
    }
})

r.on('close', function() {
    for(let i=0;i<numLines*2; i=i+2){
        console.log(counter(parseInt(lines[i]), lines[i+1].split(' ').map((el)=>{return parseInt(el)})))
    }
 });

function counter(cant, values){
    let vb, ans = 0;
    for(let i=0; i< cant-1;i++){
        vb = false;
        for(let j=i+1; j<cant; j++){
            if (values[j] > values[i]){
                vb = true;
                break;
            } 
        }
        if(vb) ans++;
    }
    return ans;
}