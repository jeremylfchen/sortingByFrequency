const countFrequency = require('./sortHelpers/countFrequency');
const sort = require('./sortHelpers/sort');

/**
 * Returns an array of tuples sorted in descending order based on frequency
 * and then in lexicographical order
 * 
 * @param {String} input 
 * @returns {Array}
 */
module.exports = (input) => {
  if (input === '') {
    return [];
  }
  const frequencies = countFrequency(input.split(' '));
  let frequenciesArr = Object.entries(frequencies);
  let x = sort(frequenciesArr);
  return frequenciesArr;
}