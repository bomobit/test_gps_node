const { makingFinalJson } = require("./writingJson");
const { makingJson } = require("./readInJson"); 
const { dataType } = require("./interfaceInit");
const { metricEquation, angloSaxonEquation } = require("./tracklogResults");

dataType.equation = 'degree';
dataType.calculation = metricEquation(makingJson());

const callTheEnd = async () => {
    await makingFinalJson(dataType);
}
callTheEnd();