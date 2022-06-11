const sortByFrequency = require('../functions/sortByFrequency');

describe('sortByFrequency', () => {
  describe('when given an empty string', () => {
    test('should return an empty array', () => {
      const input = '';
      const result = sortByFrequency(input);
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(0);
    });
  });
  describe('when given a string', () => {
    test('should return an array of tuples sorted in descending order', () => {
      const input = 'this is a test of the emergency broadcast system this is only a test dog dog dog';
      const result = sortByFrequency(input);
      const expected = [
        ['dog', 3],
        ['a', 2],
        ['is', 2],
        ['test', 2],
        ['this', 2],
        ['broadcast', 1],
        ['emergency', 1],
        ['of', 1],
        ['only', 1],
        ['system', 1], // test case in notion has "system" behind "the", need to verify later
        ['the', 1]
      ];
      result.forEach((tuple, index) => {
        expect((tuple[0])).toBe(expected[index][0]);
        expect((tuple[1])).toBe(expected[index][1]);
      });
    });
  });
});