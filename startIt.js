const rlp = require('readline');

const rl = rlp.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askIt = () => {
  return new Promise(resolve => {
    rl.question('Enter input: ', input => resolve(input));
  });
}


module.exports = { askIt }