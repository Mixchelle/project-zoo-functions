const { species } = require('../data/zoo_data');

function countAnimals(animal, sex) {
  let residentes = {};
  if (!animal) {
    const objLista = species.reduce((acc, cur) => {
      acc[cur.name] = cur.residents.length;
      return acc;
    }, { });
    return objLista;
  } const { residents } = species.find(({ name }) => name === animal.specie);
  residentes = residents;
  if (Object.values(animal).length === 2) {
    return residentes.reduce((acc, sexo) => ((sexo.sex === animal.sex) ? (acc + 1) : (acc)), 0);
  } return residentes.length;
}

module.exports = countAnimals;

console.log(countAnimals({ specie: 'elephants', sex: 'male' }));
