process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}     

function solveMeFirst(a, b) {
  return a + b;
}


function main() {
    console.log("funciona")
    var a = parseInt(readLine());
    var b = parseInt(readLine());

    var res = solveMeFirst(a, b);
    console.log(res);
}
//