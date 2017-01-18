'use strict';

const find = function (workingArray, callback) {
  let index = workingArray.findIndex(callback);
  if (index < 0) {
    return undefined;
  }

  return workingArray[index];
};

module.exports = find;
