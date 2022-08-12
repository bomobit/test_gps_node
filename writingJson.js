const fs = require("fs");
const { extentArray } = require("./readInJson");
const finalResultsArray = [];
let finalObject = {};

const makingFinalJson = async (datatypes) => {

    const unitOfMeasure = await datatypes.calculation; 
    
    for(let i = 0; i < unitOfMeasure.length; i++){
        for(let j = 0; j < unitOfMeasure[i].length; j++){
            console.log(unitOfMeasure[i][j]);
        }
    }

    for(let i = 0; i < extentArray.length; i++){
        finalResultsArray.push({
            fromGPSP: {
                lat: extentArray[i].GPSP.lat,
                lon: extentArray[i].GPSP.lon,
            },
            distance: unitOfMeasure,
            bearings: unitOfMeasure
        })
    }

    finalObject = {
        output: finalResultsArray
    }
    return finalObject; 
}

/*const finishUpJson = async (paramFunc) => {
    let data = JSON.stringify(paramFunc, null, 2);
   // let outputJson = await getJsonName.askIt().then(result => { console.log(result) })
    fs.writeFileSync('./infos/results.json', data, (err) => {
        if (err) throw err;
    console.log('Data written to file');
    });
 } */

module.exports = ({makingFinalJson});