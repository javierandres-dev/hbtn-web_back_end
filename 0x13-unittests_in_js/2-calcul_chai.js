'use strict';
const calculateNumber = (type, a, b) => {
  if (type == 'SUM') Math.round(a) + Math.round(b);
  if (type == 'SUBTRACT') Math.round(a) - Math.round(b);
  if (type == 'DIVIDE') Math.round(b) !== 0 ? Math.round(a) / Math.round(b) : 'ERROR';
}
  module.exports = calculateNumber;
