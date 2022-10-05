const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const first = data.employees.find((animal) => animal.id === id).responsibleFor[0];
  const obj = data.species.find((specie) => specie.id === first).residents;
  return Object.values(obj.sort((a, b) => a.age - b.age)[obj.length - 1]);
}

module.exports = getOldestFromFirstSpecies;
