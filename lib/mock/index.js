"use strict";

const defaultImplementation = (resolve, reject, args) => {
  resolve.apply(null, args);
};

const mockPromise = (implementation = defaultImplementation) => {
  return function() {
    const args = arguments;
    return new Promise((resolve, reject) => {
      process.nextTick(
        () => {
          implementation(resolve, reject, args);
        }
      );
    });
  };
};

module.exports = {
  mockPromise
};
