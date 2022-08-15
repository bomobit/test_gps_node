const fs = require("fs");
const { askIt } = require("./startIt")
let arrayOfJson = [];
let expandArray = [];
let modObj = {};
let extraObj = {};

const makingJson = async () => {    
  const inputJson = await askIt().then(result => { return result })
  try {
    const readJson = fs.readFileSync("./infos/"+inputJson+".json");
    arrayOfJson = JSON.parse(readJson);
  } catch (err) {
    console.log(err);
    return;
  }
  modObj = arrayOfJson.input.map(item => {
    for (let key in item) {
      if(typeof item[key] === 'GPSP') {
        item[key] = JSON.parse(item[key])
      }
      expandArray.push(item)
      return item;
    }
  })
  
  jsonObj = Object.assign(modObj);
  return modObj;  
}

module.exports = ({ makingJson, expandArray })