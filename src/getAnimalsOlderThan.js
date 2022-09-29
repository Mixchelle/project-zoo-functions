const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

// mudei nome do parametro pois estava confundindo com a propriedade age.
function getAnimalsOlderThan(animal, idade) {
  const animalIdade = species.find((specie) => specie.name === animal);
  return animalIdade.residents.every((residente) => residente.age >= idade);
}

module.exports = getAnimalsOlderThan;
