const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  let residents = {};
  if (!animal) {
    const obj = species.reduce((acc, cur) => {
      acc[cur.name] = cur.residents.length;
      return acc;
    }, { });
    residents = obj;
    return residents;
  }
}

module.exports = countAnimals;
