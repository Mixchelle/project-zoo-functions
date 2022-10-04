const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Se nao receber um parametro retorna um objeto com todos os horarios', () => {
    const hours = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(hours);
  });
  it('Testa se é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('testa se retorna uma string', () => {
    expect(typeof getOpeningHours('Wednesday', '09:00-AM')).toBe('string');
  });
  it('se inserir uma data valida deve retornar open ou close', () => {
    expect(getOpeningHours('Wednesday', '09:00-AM')).toEqual('The zoo is open');
  });
  it('se inserir uma data da semana valida deve retornar aberto ou fechado', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
  });
  it('se inserir uma data valida deve retornar aberto ou fechado', () => {
    expect(getOpeningHours('Saturday', '10:00-AM')).toEqual('The zoo is open');
  });
  it('se inserir uma data valida deve-se retornar aberto ou fechado', () => {
    expect(getOpeningHours('Thursday', '10:00-PM')).toEqual('The zoo is closed');
  });
  it('Se inserir uma data invalida retornar um erro', () => {
    expect(() => (getOpeningHours('Wednesday', 'xx:00-AM')).toThrowError('The hour should represent a number'));
  });
  it('Se inserir uma abreviacao - AM_PM invalida deve retornar erro', () => {
    expect(() => (getOpeningHours('Wednesday', '17:00-AM')).toThrowError('The hour must be between 0 and 12'));
  });
  it('Se inserir os segundos de forma invalida', () => {
    expect(() => (getOpeningHours('Wednesday', '09:61-AM')).toThrowError('The minutes must be between 0 and 59'));
  });
  it('Se inserir os segundos de forma invalida', () => {
    expect(() => (getOpeningHours('Friday', '08:91-AM')).toThrowError('The minutes must be between 0 and 59'));
  });
  it('Se inserir um dia da semana invalido retornar erro', () => {
    expect(() => (getOpeningHours('Frixxday', '08:91-AM')).toThrowError('The day must be valid. Example: Monday'));
  });
  it('Se inserir um dia da semana invalido retornar erro', () => {
    expect(() => (getOpeningHours('hoje', '08:91-AM')).toThrowError('The day must be valid. Example: Monday'));
  });
  it('Se nao for inserido a AM ou PM retornar erro', () => {
    expect(() => (getOpeningHours('Tuesday', '10:00')).toThrowError('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Se nao for inserido um numero nas horas retornar erro', () => {
    expect(() => (getOpeningHours('Tuesday', 'dez:00')).toThrowError('The should represent a number'));
  });
  it('Se nao for inserido um numero nos minutos retornar erro', () => {
    expect(() => getOpeningHours('Sunday', '09:C0-AM')).toThrowError('The minutes should represent a number');
  });
});
