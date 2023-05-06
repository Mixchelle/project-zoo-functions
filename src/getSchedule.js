const { species, hours } = require('../data/zoo_data');

const filter = (param) =>
  species.filter((animal) => animal.availability.includes(param)).map((animal) => animal.name);

const response = (param) => `Open from ${hours[param].open}am until ${hours[param].close}pm`;

// eslint-disable-next-line max-lines-per-function
function getSchedule(scheduleTarget) {
  const allDays = {
    Monday: {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    },
  };

  const daysOfWeek = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  daysOfWeek.forEach((day) => {
    allDays[day] = {
      officeHour: response(day),
      exhibition: filter(day),
    };
  });

  const animalSchedule = (animal) => species.find((an) => an.name === animal).availability;

  const daySchedule = (day) => ({
    [day]: {
      officeHour: response(day),
      exhibition: filter(day),
    },
  });

  if (scheduleTarget === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }

  if (species.find((an) => an.name === scheduleTarget)) {
    return animalSchedule(scheduleTarget);
  }

  if (Object.keys(hours).includes(scheduleTarget)) {
    return daySchedule(scheduleTarget);
  }
  return allDays;
}

module.exports = getSchedule;
