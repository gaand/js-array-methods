'use strict';

const reduce = function (originalArray, callback, initialValue) {
  // Make a copy of originalArray
  const workingArray = originalArray.slice();

  // make clear what the result is
  let accumulator = initialValue;

  // if no inital value
  // if (typeof initialValue === 'undefined') {
  if (arguments.length < 3) {
    // make the first element the inital value
    accumulator = workingArray.shift();
  }

  // call the callback for each element
  workingArray.forEach(function (element, index /*, workingArray  */) {
    accumulator = callback(accumulator, element, index, originalArray);
  });

  // return the summary
  return accumulator;
};

module.exports = reduce;
