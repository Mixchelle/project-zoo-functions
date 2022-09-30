const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((employee) => (employee.firstName === employeeName
  || employee.lastName === employeeName));
}

// seu código aqui
console.log(getEmployeeByName());

module.exports = getEmployeeByName;
