const readline = require("readline");

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,   
})

let cant, first = true, numLines = 0;
let inputNumbers = [];

r.on('line', (line) =>{
    if(first)
    {
        cant = parseInt(line);
        first = false;
    }
    else
    {
        if(line.length != 1){
            console.log(cantInversiones(line));
            numLines++;
        }
        
        if(numLines  == cant){
            r.close();
        }
    }
 
});

function cantInversiones(values){
    let ans = 0;
    let arr = values.split(' ')
    for(let j=0; j<arr.length-1; j++){
        for(let k=j+1; k<arr.length; k++){
            if(parseInt(arr[j]) > parseInt(arr[k])) {
                ans++;
            }
        }
    }
    return ans;
}

// r.on('close', function() {
    
//     for(let i=0; i<inputNumbers.length; i=i+1){
//     }
// });