//Juego con cadenas
const readline = require("readline");

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,   
})

let lines = []
let numLines = 0, cont = 0;
let isFirst = true, isSecond = true;
let cad;

r.on("line", (line) => {
    if(isFirst){
        cad = line;
        isFirst = false;
    } else {
        if(isSecond){
            numLines = parseInt(line)
            isSecond = false;
        } else {
            lines.push(line);
            cont++;    
        }
        if(cont == numLines){
            r.close()
        }
    }
})

r.on('close', function() {
    let oper;
    for(let i=0; i<numLines; i++){
        if(lines[i].length == 1){
            cad = cad.split("").reverse().join("")
        }else{
            oper = lines[i].split(' ')
            if(oper[0] == '2'){
                if(oper[1] == '1'){
                    //cad.unshift(oper[2]);
                    cad = oper[2] + cad;
                }else{
                    cad = cad + oper[2];
                }
            }else{
                if(cad.length > 0){
                    if(oper[1] == '1'){
                        cad = cad.substr(1);
                    }else{
                        cad = cad.substr(0, cad.length-1);
                    }
                }
            }
        }
    }
    console.log(cad)
});