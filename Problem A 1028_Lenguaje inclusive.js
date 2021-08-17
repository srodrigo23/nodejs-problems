const rd = require('readline')

const rl = rd.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    const x = line.split('a').join('x')
    .split('e').join('x')
    .split('i').join('x')
    .split('o').join('x')
    .split('u').join('x')
    console.log(x)
})
