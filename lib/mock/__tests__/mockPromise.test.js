"use strict";

const {mockPromise} = require('../index');

describe('mockPromise', () => {
  it('mock promise with default implementation', async function() {
    const mock = mockPromise();
    const res = await mock('foo');

    expect(res).toEqual('foo');
  });

  it('mock promise with resolve implementation', async function() {
    const mock = mockPromise((resolve) => resolve('bar'));
    const res = await mock('bar');

    expect(res).toEqual('bar');
  });

  it('mock promise with reject implementation', async function() {
    const mock = mockPromise((resolve, reject) => reject({foo: 'bar'}));
    let errorThrown = false;

    try {
      await mock();
    } catch(err) {
      errorThrown = true;
      expect(err).toEqual({foo: 'bar'});
    }
    expect(errorThrown).toEqual(true);
  });
});
