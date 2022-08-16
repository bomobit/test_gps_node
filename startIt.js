const rlp = require('readline');

/* itt kerül bekérésre a console-ról a név, 
Promiseként visszatérve, mivel ahol meghívásra kerül ez a függvény,
ott meg kell várni, hogy visszaadja a bekért értéket, különben
érték nélkül dolgozni a másik függvényben és undefined errorral eldobna.*/

const rl = rlp.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askIt = () => {
  return new Promise(resolve => {
    rl.question('JSON file name (first input, second output): ', input => resolve(input));
  });
}

const askMethod = () => {
  return new Promise(resolve => {
    rl.question('Choose the calculation method (metric or anglosaxon): ', input => resolve(input));
  });
}



module.exports = { askIt, askMethod }