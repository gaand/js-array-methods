'use strict';

const forEach = function (workingArray, callback) {
  for (let index = 0; index < workingArray.length; index++) {
    let element = workingArray[index];
    callback(element, index, workingArray);
  }
};

module.exports = forEach;
