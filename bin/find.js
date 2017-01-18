'use strict';

const examples = require('../lib/examples');
const find = require('../lib/find.js');

const loadCities = examples.cities.loadCities;

loadCities(function (workingArray) {
  let city = find(workingArray, (e /*, i, a */) => e.name === 'Boston');
  console.log('city', city);
});

// let workingArray = examples.numbers.fibonacci;
// let result = find(workingArray, (e, i /*, a */) => i === 5);
//
// console.log('find input', workingArray);
// console.log('find result', result);
