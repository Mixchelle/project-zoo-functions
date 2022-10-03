const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Se nao houver parametro deve retornar undefined', () => {
    expect(handlerElephants()).toEqual(undefined);
  });
  it('se o parametro for diferente de uma string retornar erro', () => {
    expect(handlerElephants(2574)).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('Passada uma string invalida deve retornar null', () => {
    expect(handlerElephants('teste')).toEqual(null);
  });
  it('Para o argumento popularity deve retornar um número igual ou maior a 5', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
  it('Para o argumento names deve retornar um array de nomes que possui o nome Jefferson', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('se receber o parametro names deve receber um objeto', () => {
    expect(typeof handlerElephants('names')).toBe('object');
  });
  it('se receber o parametro names deve receber um objeto com nome de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Se a função recbe o parametro averageage deve returnar uma soma ', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
});
