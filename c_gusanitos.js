const readline = require("readline");

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,   
})

let numDays = 0, cont = 0;
let isFirst = true;
let data, a = [], p = [];
r.on("line", (line) => {
    if(isFirst)
    {
        numDays = parseInt(line);
        isFirst = false;
    } 
    else
    {    
        data  = line.split(' ');
        a.push(parseInt(data[0]));
        p.push(parseInt(data[1]));
        cont++;
        if(cont  == numDays){
            let toPay = a[0] * p[0];
            let old_p = p[0];
            for(let i=1; i<a.length; i++){
                if(p[i] <= old_p){
                    old_p = p[i];
                }
                toPay = toPay + (old_p * a[i]);
            }
            console.log(toPay)
            r.close()
        }
    }
})