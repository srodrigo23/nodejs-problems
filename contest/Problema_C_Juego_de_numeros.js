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
  const MOD = BigInt(10 ** 15 + 318157);

  const n = +input.next().value;
  const a = input.next().value.split(' ').map(v => BigInt(v));

  /*
   Como es una invariante no importa en que orden procesemos los elementos nos dara el mismo resultado
   Lo unico que debemos tener cuidado es el manejo de numeros grandes y ya que los numero pueden ser demasiados grandes
   debemos usar el tipo de dato 'BitInt' para procesar los datos sin perdida de presición.
  */
  for (let i = n - 1; i >= 1; i--) {
    const y = a[a.length - 1];
    a.pop();
    const z = a[a.length - 1];
    a.pop();
    let ans = (y * z) % MOD;
    ans = (ans - y + MOD) % MOD;
    ans = (ans - z + MOD) % MOD;
    ans = (ans + 2n) % MOD;
    a.push(ans);
  }
  console.log(a[0].toString());
});