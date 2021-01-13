'use strict';
const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI function', () => {
  it('async testing Promise', (done) => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        chai.expect(res).to.eql({ data: 'Successful response from the API' })
      })
      done();
  })
})
