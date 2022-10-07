const data = require('../data/zoo_data');

const daysWeek = {
  Sunday: {
    officeHour: `Open from ${data.hours.Sunday.open}am until ${data.hours.Sunday.close}pm`,
    exhibition: data.species.filter((day) =>
      day.availability.includes('Sunday')).map((specie) => specie.name),
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
  Tuesday: {
    officeHour: `Open from ${data.hours.Tuesday.open}am until ${data.hours.Tuesday.close}pm`,
    exhibition: data.species.filter((day) =>
      day.availability.includes('Tuesday')).map((specie) => specie.name),
  },
  Wednesday: {
    officeHour: `Open from ${data.hours.Wednesday.open}am until ${data.hours.Wednesday.close}pm`,
    exhibition: data.species.filter((day) =>
      day.availability.includes('Wednesday')).map((specie) => specie.name),
  },
  Thursday: {
    officeHour: `Open from ${data.hours.Thursday.open}am until ${data.hours.Thursday.close}pm`,
    exhibition: data.species.filter((day) =>
      day.availability.includes('Thursday')).map((specie) => specie.name),
  },
  Friday: {
    officeHour: `Open from ${data.hours.Friday.open}am until ${data.hours.Friday.close}pm`,
    exhibition: data.species.filter((day) =>
      day.availability.includes('Friday')).map((specie) => specie.name),
  },
  Saturday: {
    officeHour: `Open from ${data.hours.Saturday.open}am until ${data.hours.Saturday.close}pm`,
    exhibition: data.species.filter((day) =>
      day.availability.includes('Saturday')).map((specie) => specie.name),
  },
};

function getSchedule(dayName) {
  if (!dayName) {
    return daysWeek;
  }
}

module.exports = getSchedule;
