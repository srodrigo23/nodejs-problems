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
    const n = +input.next().value;
    const a = input.next().value.split(' ').map(v => +v);
    let mx = 0;
    let cnt = 0;
    for (let i = n - 1; i >= 0; i--) {
      mx = Math.max(mx, a[i]);
      if (mx !== a[i]) {
        cnt ++;
      }
    }
    console.log(cnt);
  }
});