const countFrequency = require('../functions/sortHelpers/countFrequency');

describe('countFrequency', () => {
  describe('when given an empty array', () => {
    const input = [];
    const result = countFrequency(input);
    test('should return an object', () => {
      expect(typeof result).toBe('object');
    });
    test('should return an empty object', () => {
      expect(Object.keys(result).length).toBe(0);
    });
  });
  describe('when give an array with only 1 unique string', () => {
    const input = ['a', 'a'];
    const result = countFrequency(input);
    const expected = {
      'a': 2
    };
    test('should return an object with 1 key', () => {
      expect(Object.keys(result).length).toBe(1);
    });
    test('should contain the frequency of the string', () => {
      expect(result).toMatchObject(expected);
    });
  });
  describe('when given an array with multiple unique strings', () => {
    const input = ['a', 'b', 'b', 'c', 'c', 'c'];
    const result = countFrequency(input);
    const expected = {
      'a': 1,
      'b': 2,
      'c': 3
    };
    test('should have the same number of keys as the number of unique strings', () => {
      expect(Object.keys(result).length).toBe(3);
      expect(result).toMatchObject(expected);
    });
  });
});