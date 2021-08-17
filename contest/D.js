//Fraude
const readline = require("readline");

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,   
})

let isFirst = true, numActions, actions;
r.on("line", (line) => {
    if(isFirst){
        numActions = parseInt(line)
        isFirst = false
    } 
    else
    {
        actions = line.split(' ')
        r.close()
    }
})

let resOp, perdida = 0, ganancia = 0;
r.on('close', function() {
    //ganancia = parseInt(actions[0]);
    for(let i=1; i<numActions; i++){
        resOp = parseInt(actions[i-1]) - parseInt(actions[i]);
        if( resOp >= 0 ){
            perdida = perdida + resOp;
        }else{
            ganancia = ganancia +(-1* resOp);
        }
    }
    if(perdida > ganancia){
        console.log('PELIGROSA')
    }else{
        console.log('NO PELIGROSA')
    }
 });