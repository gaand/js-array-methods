'use strict';

const examples = require('../lib/examples');
const forEach = require('../lib/for-each.js');

let workingArray = examples.numbers.even;

workingArray.forEach((element, index, array) => {
  console.log(element, index, array === workingArray);
});

// forEach(workingArray, (element, index, array) => {
//   console.log(element, index, array === workingArray);
// });
