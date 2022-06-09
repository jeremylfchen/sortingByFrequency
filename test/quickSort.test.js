const { quickSort } = require('../api/sortHelpers/quickSort');

describe('quickSort', () => {
  describe('when given an empty array as input', () => {
    const input = [];
    quickSort(input);
    test('should return an array of length 0', () => {
      expect(Array.isArray(input)).toBe(true);
      expect(input.length).toBe(0);
    });
  });
  describe('when given an array that has multiple unique strings of equal frequency', () => {
    test('should return an array sorted lexicographically', () => {
      const input = [['b', 1], ['a', 1], ['c', 1]];
      const expected = [['a', 1], ['b', 1], ['c', 1]];
      quickSort(input);
      input.forEach((tuple, index) => {
        expect(tuple[0]).toBe(expected[index][0]);
        expect(tuple[1]).toBe(expected[index][1]);
      });
    });
  });
  describe('when given an array that has multiple unique strings of different frequencies', () => {
    test('should return an array sorted by descending frequency', () => {
      const input = [['a', 1], ['b', 3], ['c', 2]];
      quickSort(input);
      const expected = [['b', 3], ['c', 2], ['a', 1]];
      input.forEach((tuple, index) => {
        expect(tuple[0]).toBe(expected[index][0]);
        expect(tuple[1]).toBe(expected[index][1]);
      });
    });
  });
});
