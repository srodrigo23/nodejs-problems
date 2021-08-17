const readline = require("readline");
// status acepted
const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,   
})

r.on("line", (line) => {
    console.log(withoutVowels(line))
})

function withoutVowels(cad){
    return [...cad].map(function(el){
        if(el == 'a' || el == 'e' || el == 'i' || el == 'o' || el == 'u'){
            return 'x';
        }return el;
    }).join('')
}