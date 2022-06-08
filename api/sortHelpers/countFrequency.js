/**
 * Returns object mapping unique strings to frequency
 * 
 * @param {Array} input 
 * @returns {Object}
 */
module.exports = (input) => {
  let store = {};
  input.forEach((word) => {
    store[word] = store[word] + 1 || 1;
  });
  return store;
}