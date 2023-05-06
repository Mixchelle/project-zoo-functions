const handlerElephants = require('../src/handlerElephants');

describe('handlerElephants', () => {
  describe('count', () => {
    it('should return the number of elephants', () => {
      const result = handlerElephants('count');
      expect(result).toBe(4);
    });
  });

  describe('names', () => {
    it('should return an array of names containing "Jefferson"', () => {
      const result = handlerElephants('names');
      expect(result).toContain('Jefferson');
    });
  });

  describe('averageAge', () => {
    it('should return a number close to 10.5', () => {
      const result = handlerElephants('averageAge');
      expect(result).toBeCloseTo(10.5, 1);
    });
  });

  describe('location', () => {
    it('should return the location string "NW"', () => {
      const result = handlerElephants('location');
      expect(result).toBe('NW');
    });
  });

  describe('popularity', () => {
    it('should return a number greater than or equal to 5', () => {
      const result = handlerElephants('popularity');
      expect(result).toBeGreaterThanOrEqual(5);
    });
  });

  describe('availability', () => {
    it('should return an array of weekdays that does not contain "Monday"', () => {
      const result = handlerElephants('availability');
      expect(result).not.toContain('Monday');
    });
  });

  describe('undefined parameter', () => {
    it('should return undefined when no argument is passed', () => {
      const result = handlerElephants();
      expect(result).toBeUndefined();
    });
  });

  describe('invalid parameter', () => {
    it('should return "Parâmetro inválido, é necessário uma string" when an empty object is passed', () => {
      const result = handlerElephants({});
      expect(result).toBe('Parâmetro inválido, é necessário uma string');
    });

    it('should return null when a string that does not represent a functionality is passed', () => {
      const result = handlerElephants('invalidParam');
      expect(result).toBeNull();
    });
  });
});
