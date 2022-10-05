const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('testa se retorna uma string', () => {
    expect(typeof getOpeningHours('Wednesday', '09:00-AM')).toBe('string');
    expect(typeof getOpeningHours('Monday', '09:00-AM')).toBe('string');
    expect(typeof getOpeningHours('Tuesday', '09:00-AM')).toBe('string');
  });

  const closed = 'The zoo is closed';
  const open = 'The zoo is open';
  const horario = {
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 },
  };
  it('Se nao receber um parametro retorna um objeto com todos os horarios', () => {
    expect(getOpeningHours()).toEqual(horario);
  });
  it('se inserir uma data valida deve retornar open ou close', () => {
    expect(getOpeningHours('Wednesday', '09:00-AM')).toEqual(open);
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual(closed);
    expect(getOpeningHours('Saturday', '10:00-AM')).toEqual(open);
    expect(getOpeningHours('Thursday', '10:00-PM')).toEqual(closed);
    expect(getOpeningHours('Sunday', '10:00-PM')).toEqual(closed);
    expect(getOpeningHours('Tuesday', '05:00-PM')).toEqual(open);
  });

  it('Se inserir um valor invalido retornar um erro', () => {
    expect(() => (getOpeningHours('Wednesday', 'xx:00-AM')).toThrowError('The hour should represent a number'));
    expect(() => (getOpeningHours('Friday', 'xx:00-AM')).toThrowError('The hour should represent a number'));
    expect(() => (getOpeningHours('Wednesday', '17:00-AM')).toThrowError('The hour must be between 0 and 12'));
    expect(() => (getOpeningHours('Tuesday', '21:00-AM')).toThrowError('The hour must be between 0 and 12'));
    expect(() => (getOpeningHours('Wednesday', '09:61-AM')).toThrowError('The minutes must be between 0 and 59'));
    expect(() => (getOpeningHours('Friday', '08:91-AM')).toThrowError('The minutes must be between 0 and 59'));
    expect(() => (getOpeningHours('Friday', '08:91-AM')).toThrowError('The day must be valid. Example: Monday'));
    expect(() => (getOpeningHours('hoje', '08:91-AM')).toThrowError('The day must be valid. Example: Monday'));
    expect(() => (getOpeningHours('Tuesday', '10:00')).toThrowError('The abbreviation must be \'AM\' or \'PM\''));
    expect(() => (getOpeningHours('Saturday', '10:00')).toThrowError('The abbreviation must be \'AM\' or \'PM\''));
    expect(() => (getOpeningHours('Tuesday', 'dez:00')).toThrowError('The should represent a number'));
    expect(() => (getOpeningHours('Tuesday', 'onze:00')).toThrowError('The should represent a number'));
    expect(() => (getOpeningHours('Sunday', '09:C0-AM')).toThrowError('The minutes should represent a number'));
    expect(() => (getOpeningHours('Sunday', '09:aa-AM')).toThrowError('The minutes should represent a number'));
  });
});
