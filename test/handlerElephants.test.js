const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('ao receber o parametro averageAge deve retornar um numero', () => {
    expect(typeof handlerElephants('average')).toBe('number');
  });
  it('se receber o parametro names deve receber um objeto', () => {
    expect(typeof handlerElephants('names')).toBe('object');
  });
  it('Se receber o  parâmetro count deve retornar 4', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Se nao houver parametro deve retornar undefined', () => {
    expect(handlerElephants()).toEqual(undefined);
  });
  it('se o parametro for diferente de uma string retornar erro', () => {
    const string = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(2574)).toEqual(string);
    expect(handlerElephants({})).toEqual(string);
    expect(handlerElephants([])).toEqual(string);
  });
  it('Se receber o parametro popularity deve retornar um número igual 5', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });

  it('se receber o parametro names deve receber um objeto com nome de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Se a função recebe o parametro averageage deve returnar uma soma ', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });

  it('se a função receber o parametro names deve retornar ', () => {
    expect(handlerElephants('names')).toContain('Ilana');
    expect(handlerElephants('names')).toContain('Orval');
    expect(handlerElephants('names')).toContain('Bea');
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Se a função receber o paramentro availability deve retornar um array de dias da semana que não contém Monday:', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
  it('Passada uma string que nao tenha uma funcionalidade deve retornar null: ', () => {
    expect(handlerElephants(' ')).toEqual(null);
    expect(handlerElephants('#')).toEqual(null);
    expect(handlerElephants('Flamengo')).toEqual(null);
  });
  it('se a função receber o parametro location deve retornar a string NW: ', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
});
