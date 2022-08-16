const { askMethod } = require("./startIt")
const { makingJson } = require("./readInJson"); 
const { makingFinalJson } = require("./writingJson");
const { dataType } = require("./interfaceInit");
const { metricEquation, angloSaxonEquation } = require("./tracklogResults");

/* itt kerül összefűzésre az, hogy a megfelelő osztály - interface típus hívódjon meg
    csak felcserélve működik, de a típus eldöntése után, azzal a módszerrel számítódiknak az értékek
    amely kiválasztásra került
    itt az átalakított JSON file függvény importját és a számításokért felelős függvények importját kapja értékül 
    a dataType objektum calculation paramétere annak fényében hogy az inputon milyen értéket kapott
    ezek után a callTheEnd függvény pedig meghívja a makingFinalJson függvényt ami paraméterben megkapja a megfelelő 
    adattípust és a kiszámított adatokat paraméterben
    ezekből az adatokból létrehozza a kimenethez szükséges objektumot, ami a writingJson fileban pedig átalakításra kerül 
    a beépített JSON.stringify függvénnyel
    majd pedig ez kerül kiírásra egy új JSON file-ba
*/

const getAnswer = async () => {
  const answer = await askMethod().then(result => { return result })    
    if(answer === 'metric'){
        dataType.calculation = await metricEquation(makingJson());
    }else if(answer === 'anglosaxon'){
        dataType.calculation = await angloSaxonEquation(makingJson());
    } else {
        console.log("Not a correct form of calculation method!")
    }
    return dataType;
}

const callTheEnd = async (data) => {
    await makingFinalJson(await data);
}

callTheEnd(getAnswer())