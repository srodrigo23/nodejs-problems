const readline = require("readline");

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,   
})

let linesInput = [], numLine = 0
let first = true;
r.on('line', (line) =>{
    if(first)
    {
        cant = parseInt(line);
        first = false;
    }
    else
    {
        linesInput.push(line)
        numLine++;
        if(cant*4  == numLine){
            r.close();
        }
    }
 
});


 r.on('close', function() {
    let ans, xy_a, r_a, xy_b, r_b;
    
    for(let i=0; i<linesInput.length; i=i+4){
        let dist;
        xy_a = linesInput[i].split(' ').map((cont)=>{return parseInt(cont)});
        r_a = parseInt(linesInput[i+1])
        xy_b = linesInput[i+2].split(' ').map((cont)=>{return parseInt(cont)});
        r_b = parseInt(linesInput[i+3])
        
        dist = Math.pow((Math.pow(xy_b[0] - xy_a[0], 2) + Math.pow(xy_b[1] - xy_a[1], 2)), 1/2)
        if(dist<=r_a+r_b) console.log("Todo OK")
        else console.log((Math.abs(dist - r_a - r_b)).toFixed(2))
    }
 });