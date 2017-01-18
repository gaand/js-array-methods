'use strict';

const findIndex = function (workingArray, callback) {
  for (let i = 0; i < workingArray.length; i++) {
    let element = workingArray[i];
    if (callback(element, i, workingArray)) {
      return i;
    }
  }

  return -1;
};

module.exports = findIndex;
