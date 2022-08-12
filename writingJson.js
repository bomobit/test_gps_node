const fs = require("fs");
const equationResults = require("./tracklogResults")
const readJson = require("./readInJson");
//const getJsonName = require("./startIt");

//let basicJson = equationResults.finalJson;
let finalResultsArray = [];
let finalObject = {};
/*var alerts = [ 
    {num : 1, app:'helloworld',message:'message'},
    {num : 2, app:'helloagain',message:'another message'} 
*/
const makingFinalJson = async () => {
    let calcedDistances = await equationResults.distanceEquation();
    let calcedBearings = await equationResults.bearingEquation();
    const basicJson = await readJson.makingJson();
for(let i = 0; i < basicJson.length; i++){
    finalResultsArray.push({
        fromGPSP: {
            lat: basicJson[i].GPSP.lat,
            lon: basicJson[i].GPSP.lon,
        },
        distance: calcedDistances[i],
        bearings: calcedBearings[i]
    })
}

    finalObject = {
        output: finalResultsArray
    }

    return finalObject;

}

const finishUpJson = async (paramFunc) => {
    let data = JSON.stringify(paramFunc, null, 2);
   // let outputJson = await getJsonName.askIt().then(result => { console.log(result) })
    fs.writeFileSync('./infos/results.json', data, (err) => {
        if (err) throw err;
    console.log('Data written to file');
    });
 }

 console.log('This is after the write call');

module.exports = ({makingFinalJson, finishUpJson});