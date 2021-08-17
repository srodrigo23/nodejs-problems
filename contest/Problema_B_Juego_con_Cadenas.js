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
  // simulamos una array:
  const CAD = {};
  let ini = 0;
  let fin = 0;
  /* leemos la cadena inicial y sus caracteres lo guardamos en un objeto:
  CAD = { 0: 'P', 1: 'A', 2: 'K' }
  manejamos un obejeto en lugar de una caden o en lugar de un array por que podremos hacer mas rapido
  las operaciones de eleminar y agregar
   */
  input.next().value.split('').forEach((car, index) => {
    CAD[index] = car;
    fin++;
  });
  // leemos el numero de operaciones:
  let N = +input.next().value;
  // dir lo usaremos para simular la operacion de voltear la cadena
  let dir = true;
  while (N--) {
    let a = input.next().value.split(' ');
    if (+a[0] === 1) { // no volteamos la cadena solo nos guardamos una bandera para realizar las siguientes operaciones:
      dir = !dir;
    } else if (+a[0] === 2) { // agregamos el caracter según la dirección que estemos -->-- ó --<--
      const P = +a[1];
      const X = a[2];
      if ((P === 1 && dir) || (P === 2 && !dir)) {
        ini--;
        CAD[ini] = X;
      } else {
        CAD[fin] = X;
        fin++;
      }
    } else if (fin - ini > 0) { // eliminamos un caracter según la dirección que estemos --->--- ó ---<---
      const P = +a[1];
      if ((P === 1 && dir) || (P === 2 && !dir)) {
        ini++;
      } else {
        fin--;
      }
    }
  }
  // componemos la cadena en un array y no en una cadena
  // por que agregar elementos a un array es más rapido que concatenar cadenas:
  const ans = [];
  if (dir) {
    for (let i = ini; i < fin; i++) {
      ans.push(CAD[i]);
    }
  } else {
    for (let i = fin - 1; i >= ini; i--) {
      ans.push(CAD[i]);
    }
  }
  // imprimimos el resultado:
  console.log(ans.join(''));
});