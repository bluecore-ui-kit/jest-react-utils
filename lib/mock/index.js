"use strict";

const defaultImplementation = (resolve, reject, ...args) => {
  resolve(...args);
};

const mockPromise = (implementation = defaultImplementation) => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      process.nextTick(
        () => {
          implementation(resolve, reject, ...args);
        }
      );
    });
  };
};

module.exports = {
  mockPromise
};
