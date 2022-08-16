/*mivel JavaScript-ben nincsenek interfacek ezért úgy találtam megfelelőnek, ha 
létrehozok egy objektumot, ami kvázi maga az interface osztály
a tulajdonságai meghatározzak a számítási módszert,
az equation csak a típust várja szövegként (degree vagy radian), 
a calculation viszont a tracklogResults-ban meghatározott függvények közül
várja az értékét, ahol példányosításra kerül az objektum (metricEquation vagy angloSaxonEquation)
*/
const dataType = {
    equation: '',
    calculation: () => null
}
module.exports = { dataType };