const fs = require("fs");
const { askIt } = require("./startIt")
let arrayOfJson = [];
const extentArray = [];


const makingJson = async () => {    
  const inputJson = await askIt().then(result => { return result })
  try {
    const readJson = fs.readFileSync("./infos/"+inputJson+".json");
    arrayOfJson = JSON.parse(readJson);
  } catch (err) {
    console.log(err);
    return;
  }
  const modObj = arrayOfJson.input.map(item => {
    for (let key in item) {
      if(typeof item[key] === 'GPSP') {
        item[key] = JSON.parse(item[key])
      }
      extentArray.push(item);
    }
    return item;
  })
  return modObj;  
}
module.exports = ({ makingJson, extentArray })