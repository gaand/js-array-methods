'use strict';

const map = function (workingArray, callback) {
  const newArray = new Array(workingArray.length);
  workingArray.forEach((element, index, array) => {
    newArray[index] = callback(element, index, array);
  });
  return newArray;
};

module.exports = map;
