const metricDistances = [];
const metricBearings = [];
const angloSaxoncDistances = [];
const angloSaxonBearings = [];
//makingJson

const metricEquation = async (paramFunc) => {
    const finalJson = await paramFunc;
    const R = 6371e3;
    let size = Object.keys(finalJson).length;

    for(let i = 0; i < size - 1; i++){
      const φ1 = finalJson[i].GPSP.lat * Math.PI/180; // φ, λ in radians
      const φ2 = (finalJson[i+1]).GPSP.lat * Math.PI/180;
      const λ1 = finalJson[i].GPSP.lon * Math.PI/180;
      const λ2 = (finalJson[i+1]).GPSP.lon * Math.PI/180;

      const Δφ = (φ2-φ1) * Math.PI/180;
      const Δλ = (λ2-λ1) * Math.PI/180;

      const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ/2) * Math.sin(Δλ/2);
      
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      //console.log(c);
        const d = R * c;
        metricDistances.push(d.toFixed(5))
    //masik szamitas
        const y = Math.sin(λ2-λ1) * Math.cos(φ2);
        const x = Math.cos(φ1)*Math.sin(φ2) -
                  Math.sin(φ1)*Math.cos(φ2)*Math.cos(λ2-λ1);
        const θ = Math.atan2(y, x);
        const brng = (θ*180/Math.PI + 360) % 360; // in degrees
        metricBearings.push(Math.round(brng))

    }
      return { distances: metricDistances, bearings: metricBearings };
}

const angloSaxonEquation = async (paramFunc) => {

  const finalJson = await paramFunc;
  let size = Object.keys(finalJson).length;

  for(let i = 0; i < size.length - 1; i++){
    const φ1 = finalJson[i].GPSP.lat * Math.PI/180; // φ, λ in radians
    const φ2 = (finalJson[i+1]).GPSP.lat * Math.PI/180;
    const λ1 = finalJson[i].GPSP.lon * Math.PI/180;
    const λ2 = (finalJson[i+1]).GPSP.lon * Math.PI/180;

    const Δφ = (φ2-φ1) * Math.PI/180;
    const Δλ = (λ2-λ1) * Math.PI/180;

      const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ/2) * Math.sin(Δλ/2);
      
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      //console.log(c);
      angloSaxoncDistances.push([c.toFixed(5)])
    //masik szamitas
        const y = Math.sin(λ2-λ1) * Math.cos(φ2);
        const x = Math.cos(φ1)*Math.sin(φ2) -
                  Math.sin(φ1)*Math.cos(φ2)*Math.cos(λ2-λ1);
        const θ = Math.atan2(y, x);

        angloSaxonBearings.push([Math.round(θ)])

  }   
    return {distances: angloSaxoncDistances, bearings: angloSaxonBearings};
  }

module.exports = ({ metricEquation, angloSaxonEquation })