const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber type == SUM', () => {
  it('checks the output', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    assert.strictEqual(calculateNumber('SUM', 3.7, 1), 5);
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    assert.strictEqual(calculateNumber('SUM', 4.5, 1.4), 6);
    assert.strictEqual(calculateNumber('SUM', 0.0, 0), 0);
    assert.strictEqual(calculateNumber('SUM', -1, 1), 0);
    assert.strictEqual(calculateNumber('SUM', 1, -1), 0);
    assert.strictEqual(calculateNumber('SUM', -1, -1), -2);
  });
});

describe('calculateNumber type == SUBSTRACT', () => {
  it('checks the output', () => {
    assert.strictEqual(calculateNumber('SUBSTRACT', 5, 3), 2);
    assert.strictEqual(calculateNumber('SUBSTRACT', 3.1, 2.5), 0);
    assert.strictEqual(calculateNumber('SUBSTRACT', 0.0, 5), -5);
    assert.strictEqual(calculateNumber('SUBSTRACT', 2, 4.5), -3);
    assert.strictEqual(calculateNumber('SUBSTRACT', -1, 1), -2);
    assert.strictEqual(calculateNumber('SUBSTRACT', -1.5, 0), -1);
  });
});
describe('calculateNumber type == DIVIDE', () => {
  it('check the output', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 2, 2.5), 0.6666666666666666);
    assert.strictEqual(calculateNumber('DIVIDE', 0.0, 2), 0);
    assert.strictEqual(calculateNumber('DIVIDE', -1, 1), -1);
    assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
  });
});
