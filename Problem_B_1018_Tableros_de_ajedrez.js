const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const inputData = [];
rl.on('line', (line) => inputData.push(line));

function* reader() {
  let i = 0;
  while (i < inputData.length) yield inputData[i++];
}

rl.on('close', () => {
  const input = reader();
  let T = +input.next().value;
  while (T--) {
    let n = +input.next().value;
    let r = 0;
    for (let i = 1; i <= n; i++) {
      r += i * i;
    }
    console.log(r);
  }
});