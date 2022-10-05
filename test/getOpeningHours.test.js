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

  it('Se nao receber um parametro retorna um objeto com todos os horarios', () => {
    const horario = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(horario);
  });
  it('se inserir uma data valida deve retornar open ', () => {
    const open = 'The zoo is open';
    expect(getOpeningHours('Wednesday', '09:00-AM')).toEqual(open);
    expect(getOpeningHours('Saturday', '10:00-AM')).toEqual(open);
    expect(getOpeningHours('Tuesday', '05:00-PM')).toEqual(open);
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual(open);
  });
  it('se inserir uma data valida deve retornar closet ', () => {
    const closed = 'The zoo is closed';
    expect(getOpeningHours('Monday', '10:00-AM')).toEqual(closed);
    expect(getOpeningHours('Thursday', '10:00-PM')).toEqual(closed);
    expect(getOpeningHours('Sunday', '10:00-PM')).toEqual(closed);
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual(closed);
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual(closed);
  });

  it('Testa se retorna erro de correção da escrita da abreviação', () => {
    expect(() => {
      getOpeningHours('Saturday', '10:00-KM');
    }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
    expect(() => {
      getOpeningHours('Tuesday', '10:00');
    }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Se inserir um valor de abreviação invalido retornar um erro', () => {
    expect(() => {
      getOpeningHours('Froday', '08:00-AM');
    }).toThrow('The day must be valid. Example: Monday');
    expect(() => {
      getOpeningHours('Thu', '10:00-AM');
    }).toThrow('The day must be valid. Example: Monday');
  });

  it('Se inserir um valor de hora que nao seja numero retornar um erro', () => {
    expect(() => {
      getOpeningHours('Tuesday', 'xx:00-AM');
    }).toThrow('The hour should represent a number');
    expect(() => {
      getOpeningHours('Friday', 'dez:00-AM');
    }).toThrow('The hour should represent a number');
  });

  it('Se inserir um valor de minutos  que nao seja numero  retornar um erro', () => {
    expect(() => {
      getOpeningHours(('Sunday', '09:XX-AM'));
    }).toThrow('The minutes should represent a number');
    expect(() => {
      getOpeningHours(('Friday', '09:BB-AM'));
    }).toThrow('The minutes should represent a number');
  });

  it('Se inserir um valor de horas que nao seja numero retornar um erro', () => {
    expect(() => {
      getOpeningHours('Tuesday', 'dez:00');
    }).toThrow('The hour must be between 0 and 12');
    expect(() => {
      getOpeningHours('Sunday', '23:00');
    }).toThrow('The hour must be between 0 and 12');
  });
  it('Se inserirum valor de minuto invalido retornar erro', () => {
    expect(() => {
      getOpeningHours('Tuesday', '10:64-AM');
    }).toThrow('The minutes must be between 0 and 59');
  });
});
