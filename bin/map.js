'use strict';

const examples = require('../lib/examples');
const map = require('../lib/map.js');

let workingArray = examples.numbers.whole;

// let result = map(workingArray, function (element) {
//   return element * 5;
// });

let result = workingArray.map((e) => e * 5);

console.log('map input', workingArray);
console.log('map result', result);
