const { species } = require('../data/zoo_data');

const allLocations = () => {
  const locationObj = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  species.forEach((animal) => locationObj[animal.location].push(animal.name));
  return locationObj;
};

const getSortedAnimals = (animalID, sorted) => {
  const sortedArray = [];
  const { residents } = species.find((animal) => animal.id === animalID);
  residents.forEach((resident) => sortedArray.push(resident.name));
  if (sorted) sortedArray.sort();
  return sortedArray;
};

const getAnimalGender = (animalID, sex, sorted) => {
  const genderArray = [];
  const { residents } = species.find((animal) => animal.id === animalID);
  residents.filter((resident) => resident.sex === sex).forEach((resident) => genderArray.push(resident.name));
  if (sorted) genderArray.sort();
  return genderArray;
};

function getAnimalsByName(location, sex, sorted) {
  const animalArr = [];
  if (sex) {
    species
      .filter((animal) => animal.location === location)
      .forEach((animal) => {
        const obj = { [animal.name]: getAnimalGender(animal.id, sex, sorted) };
        animalArr.push(obj);
      });
    return animalArr;
  }
  species
    .filter((animal) => animal.location === location)
    .forEach((animal) => {
      const obj = { [animal.name]: getSortedAnimals(animal.id, sorted) };
      animalArr.push(obj);
    });
  return animalArr;
}

const getOtherOptions = (sex, sorted) => {
  const locationObj = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };

  locationObj.NE = getAnimalsByName('NE', sex, sorted);
  locationObj.NW = getAnimalsByName('NW', sex, sorted);
  locationObj.SE = getAnimalsByName('SE', sex, sorted);
  locationObj.SW = getAnimalsByName('SW', sex, sorted);

  return locationObj;
};

function getAnimalMap(options) {
  if (!options) return allLocations();
  const { includeNames, sex, sorted } = options;
  if (!includeNames) return allLocations();
  return getOtherOptions(sex, sorted);
}

module.exports = getAnimalMap;
