'use strict';
const chai = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber type == SUM', () => {
  it('checks the output', () => {
    chai.expect(calculateNumber('SUM', 1, 3), 4);
    chai.expect(calculateNumber('SUM', 1, 3.7), 5);
    chai.expect(calculateNumber('SUM', 3.7, 1), 5);
    chai.expect(calculateNumber('SUM', 1.4, 4.5), 6);
    chai.expect(calculateNumber('SUM', 4.5, 1.4), 6);
    chai.expect(calculateNumber('SUM', 0.0, 0), 0);
    chai.expect(calculateNumber('SUM', -1, 1), 0);
    chai.expect(calculateNumber('SUM', 1, -1), 0);
    chai.expect(calculateNumber('SUM', -1, -1), -2);
  });
});

describe('calculateNumber type == SUBTRACT', () => {
  it('checks the output', () => {
    chai.expect(calculateNumber('SUBTRACT', 5, 3), 2);
    chai.expect(calculateNumber('SUBTRACT', 3.1, 2.5), 0);
    chai.expect(calculateNumber('SUBTRACT', 4.5, 2), 3);
    chai.expect(calculateNumber('SUBTRACT', 0.0, 5), -5);
    chai.expect(calculateNumber('SUBTRACT', 2, 4.5), -3);
    chai.expect(calculateNumber('SUBTRACT', -1, 1), -2);
    chai.expect(calculateNumber('SUBTRACT', -1.5, 0), -1);
  });
});

describe('calculateNumber type == DIVIDE', () => {
  it('check the output', () => {
    chai.expect(calculateNumber('DIVIDE', 2, 2.5), 0.6666666666666666);
    chai.expect(calculateNumber('DIVIDE', 0.0, 2), 0);
    chai.expect(calculateNumber('DIVIDE', -1, 1), -1);
    chai.expect(calculateNumber('DIVIDE', 1, 0), 'Error');
  });
});
