const { makingFinalJson, finishUpJson } = require("./writingJson");
const { makingJson } = require("./readInJson"); 
const { dataType } = require("./interfaceInit");
const { metricEquation, angloSaxonEquation } = require("./tracklogResults");

dataType.equation = 'degree';
dataType.calculation = metricEquation(makingJson());

const callTheEnd = async () => {
    await finishUpJson(makingFinalJson(dataType));
}
callTheEnd();