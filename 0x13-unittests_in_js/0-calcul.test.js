const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('checks the output', () => {
    assert.equal(calculateNumber(1, 3), 4);
    assert.equal(calculateNumber(1, 3.7), 5);
    assert.equal(calculateNumber(1.2, 3.7), 5);
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  it('negative numbers', () => {
    assert.equal(calculateNumber(-1, 1), 0);
    assert.equal(calculateNumber(1, -1), 0);
    assert.equal(calculateNumber(-1, -1), -2);
  });
  it('checks arguments', () => {
    assert.equal(isNaN(calculateNumber(1)), true);
    assert.equal(isNaN(calculateNumber()), true);
  });
});
