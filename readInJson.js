const fs = require("fs");
const { askIt } = require("./startIt")
const expandArray = [];
let arrayOfJson = [];
let modObj = {};

  /*a JSON file helyett a file nevét kértem be és azt fűztem hozzá az elérési útvonalához a filenak, 
  nem nagyon találtam olyan megvalósítást, hogy a path vagy név bekérés mellett milyen más opciók állnak rendelkezésre
  miután megtörténik a file beolvasása és parse-olása, a GSPS kulcs alá eső értékeket külön parseolja fel, hogy a lat és lon
  értékek is elérhetőek legyenek. a függvény egy objektummal tér vissza, viszont létrehozásra került egy tömb is, mivel
  a későbbiekben külön szükség van csak az eltárolt JSON-ből parseolt objektumra.*/

  const makingJson = async () => {
    const inputJson = await askIt().then(result => { return result })
    try {
      const readJson = fs.readFileSync("./infos/" + inputJson + ".json");
      arrayOfJson = JSON.parse(readJson);
    } catch (err) {
      console.log("Not valid file name of JSON or not existing JSON file!", err);
      return;
    }
    modObj = arrayOfJson.input.map(item => {
      for (let key in item) {
        if (typeof item[key] === 'GPSP') {
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
