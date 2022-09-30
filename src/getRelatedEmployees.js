const { employees } = require('../data/zoo_data');

function isManager(id) {
  const name = employees.find(({ id } ) => employees.id === id)
  return name = employees.find(({ managers } ) => employees.managers === [ ' '])

  // seu código aqui
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };
