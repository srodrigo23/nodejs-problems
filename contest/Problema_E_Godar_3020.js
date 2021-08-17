const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const inputData = [];
rl.on('line', (line) => inputData.push(line));

function* reader() {
  let i = 0;
  while (i < inputData.length) yield inputData[i++];
}

let x, y, n, k;
const fibo = [];

const generate_fibo = () => {
  fibo.push(BigInt(0));
  fibo.push(BigInt(1));
  fibo.push(BigInt(1));
  for (let i = 3; i <= 88; i++) {
    fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
  }
};

const solve = (n, k) => {
  if (n === 1) return x;
  if (n === 2) return y;
  const limit = fibo[n - 2];
  if (k > limit) return solve(n - 1, BigInt(k) - limit);
  else return solve(n - 2, k);
};

rl.on('close', () => {
  const input = reader();
  generate_fibo();
  const data = input.next().value.split(' ');
  x = data[0];
  y = data[1];
  n = +data[2];
  k = BigInt(data[3]);
  console.log(solve(n, k));
});