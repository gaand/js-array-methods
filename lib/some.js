'use strict';

const some = function (workingArray, callback) {
  let index = workingArray.findIndex(callback);
  if (index < 0) {
    return false;
  }

  return true;
};

module.exports = some;
