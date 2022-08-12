const fs = require("fs");
const { askIt } = require("./startIt")
let arrayOfJson = [];
const makingJson = async () => {    
const inputJson = await askIt().then(result => { return result; })
let array = [];
  try {
    const readJson = fs.readFileSync("./infos/"+inputJson+".json");
    array = JSON.parse(readJson);
  } catch (err) {
    console.log(err);
    return;
  }
  return array;
}

const modObj = arrayOfJson.input.map(item => {
  for (let gpsp in item) {
    if(typeof item[gpsp] === 'GPSP') {
      item[gpsp] = JSON.parse(item[gpsp])
    }
  }
  return item;
})

module.exports = ({ modObj })