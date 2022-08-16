const fs = require("fs");
const { askIt } = require("./startIt")
const { expandArray } = require("./readInJson");
const finalResultsArray = [];
let finalObject = {};

/* a kimeneti JSON formázásához megírt függvény, ami paraméterben vár egy tulajdonképpen "interface adattípust", 
    ami meghatározásra került az interfaceInit osztályban
    ennek az objektumnak a calculation adattagja meghatározza a számítási módot (degree vagy radian)
    az eredeti lat és lon értékeket az expandArray-ből kerülnek bele, ez az alap parse-olt JSON
    ezek pedig egy tömbbe kerülnek bele, amiben mint objektumok kerülnek tárolásra, a végén pedig
    stringify módszerrel átalakításra kerül a végső objektum, amibe a tömb került bele
    ez pedig kiírásra kerül az infos mappába
 */

const makingFinalJson = async (datatypes) => {

    const unitOfMeasure = await datatypes.calculation; 
        //let size = Object.keys(expandArray).length;
    for(let i = 1; i < expandArray.length; i++){
           finalResultsArray.push({
             fromGPSP: {
                lat: expandArray[i].GPSP.lat,
                lon: expandArray[i].GPSP.lon
            },
                distance: unitOfMeasure.distances[i-1],
                bearing: unitOfMeasure.bearings[i-1]
        })
     } 
    finalObject = {
        output: finalResultsArray
    }
    const data = JSON.stringify(finalObject, null, 2);
    return finishUpJson(data); 
}
const finishUpJson = async (paramData) => {
    const outputJson = await askIt().then(result => { return result })
    try {
      fs.writeFileSync('./infos/' + outputJson + '.json', paramData)
    }catch(err){
        console.log("Not valid file name for JSON or not valid output data!", err);
        return;
    }
    process.exit(1)
 } 

module.exports = ({ makingFinalJson, finishUpJson});