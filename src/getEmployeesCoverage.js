const data = require('../data/zoo_data');

const employeesList = data.employees.map((objeto) => {
  const listObjet = {
    id: objeto.id,
    fullName: `${objeto.firstName} ${objeto.lastName}`,
    species: objeto.responsibleFor.map((id) => data.species
      .find((specie) => specie.id === id).name),
    locations: objeto.responsibleFor.map((id) => data.species
      .find((specie) => specie.id === id).location),
  };
  return listObjet;
});

function getEmployeesCoverage(objeto) {
  if (!objeto) {
    return employeesList;
  }
  const findEmployee = employeesList.find((person) =>
    person.fullName.includes(objeto.name) || person.id === objeto.id);
    
  if (!findEmployee) {
    throw new Error('Informações inválidas');
  }
  return findEmployee;
}

module.exports = getEmployeesCoverage;

console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));
