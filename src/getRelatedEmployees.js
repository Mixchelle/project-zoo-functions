const { employees } = require('../data/zoo_data');

function isManager(id) {
  const name = employees.some((nome) => nome.managers.includes(id));
  return name;
}

function getRelatedEmployees(managerId) {
  const manager = isManager(managerId);
  if (manager === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } const gerente = employees.filter((employee) => employee.managers
    .some((value) => value === managerId))
    .map((names) => `${names.firstName} ${names.lastName}`);
  return gerente;
}

module.exports = { isManager, getRelatedEmployees };
