const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const obj = {
    child: entrants.filter((visitante) => visitante.age < 18).length,
    adult: entrants.filter((visitante) => visitante.age >= 18 && visitante.age < 50).length,
    senior: entrants.filter((visitante) => visitante.age >= 50).length,
  };
  return obj;
}
function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  } if (Object.values(entrants).length === 0) {
    return 0;
  } const QuantVisit = countEntrants(entrants);
  const childN = QuantVisit.child * prices.child;
  const adultN = QuantVisit.adult * prices.adult;
  const seniorN = QuantVisit.senior * prices.senior;
  const soma = childN + adultN + seniorN;
  return soma;
}

module.exports = { calculateEntry, countEntrants };
