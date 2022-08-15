const fs = require("fs");
const { askIt } = require("./startIt")
const { expandArray } = require("./readInJson");
const finalResultsArray = [];
let finalObject = {};

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
    let data = JSON.stringify(finalObject, null, 2);

    return data; 

}
const finishUpJson = async (paramFunc) => {
    console.log("lefute")
    let outputJson = await askIt().then(result => { return result })
    fs.writeFileSync('./infos/results.json', paramFunc, (err) => {
        if (err) throw err;
    console.log('Data written to file');
    });
 } 

module.exports = ({ makingFinalJson, finishUpJson});