'use strict';

const filter = function (workingArray, callback) {
  const newArray = [];  // new Array();
  workingArray.forEach(function (element, index, array) {
    if (callback(element, index, array)) {
      newArray.push(element);
    }
  });

  return newArray;
};

module.exports = filter;
