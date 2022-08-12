const { modObj } = require("./readInJson");
//console.log(finalJson)
let distanceResults = [];
let bearingResults = [];
/*const R = 6371e3; // metres
const φ1 = lat1 * Math.PI/180; // φ, λ in radians
const φ2 = lat2 * Math.PI/180;
const Δφ = (lat2-lat1) * Math.PI/180;
const Δλ = (lon2-lon1) * Math.PI/180;

const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2);
const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

const d = R * c; // in metres */
const distanceEquation = async () => {
   const finalJson = modObj;
    const R = 6371e3;
    for(let i = 0; i < finalJson.length - 1; i++){
        const φ1 = finalJson[i].GPSP.lat * Math.PI/180; // φ, λ in radians
        const φ2 = finalJson[i+1].GPSP.lat * Math.PI/180;

        const λ1 = finalJson[i].GPSP.lon * Math.PI/180;
        const λ2 = finalJson[i+1].GPSP.lon * Math.PI/180;

        const Δφ = (φ2-φ1) * Math.PI/180;
        const Δλ = (λ2-λ1) * Math.PI/180;

        const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2);
        
          const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        //console.log(c);
          const d = R * c;
          distanceResults.push([d.toFixed(5)])
    }   
    return distanceResults;
}


const bearingEquation = async () => {
  const finalJson = modObj;

    for(let i = 0; i < finalJson.length - 1; i++){
    const φ1 = finalJson[i].GPSP.lat * Math.PI/180; // φ, λ in radians
    const φ2 = finalJson[i+1].GPSP.lat * Math.PI/180;

    const λ1 = finalJson[i].GPSP.lon * Math.PI/180;
    const λ2 = finalJson[i+1].GPSP.lon * Math.PI/180;

    const y = Math.sin(λ2-λ1) * Math.cos(φ2);
    const x = Math.cos(φ1)*Math.sin(φ2) -
              Math.sin(φ1)*Math.cos(φ2)*Math.cos(λ2-λ1);
    const θ = Math.atan2(y, x);
    const brng = (θ*180/Math.PI + 360) % 360; // in degrees
    bearingResults.push([Math.round(brng)])
    }
    return bearingResults;
}


module.exports = ({ distanceEquation, bearingEquation })