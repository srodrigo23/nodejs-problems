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

  const N = +input.next().value;
  const lista = input.next().value.split(' ').map(v => +v);

  let idperdida = 0;
  let idganancia = 0;
  let perdidamax = 0;
  let gananciamax = 0;
  for (let i = 0; i < N; i++) {
    if (lista[i] < lista[idganancia]) {
      idganancia = i;
    } else {
      const ganancia = lista[i] - lista[idganancia];
      gananciamax = Math.max(gananciamax, ganancia);
    }
    if (lista[i] > lista[idperdida]) {
      idperdida = i;
    } else {
      const perdida = lista[idperdida] - lista[i];
      perdidamax = Math.max(perdidamax, perdida);
    }
  }
  if (perdidamax > gananciamax) {
    console.log('PELIGROSA');
  } else {
    console.log('NO PELIGROSA');
  }
});