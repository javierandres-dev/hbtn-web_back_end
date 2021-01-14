'use strict';
const request = require('request');
const chai = require('chai');

describe('basic integration testing', () => {
  describe('GET /', () => {
    it('endpoint: GET /', (done) => {
      const call = {
        url: 'http://localhost:7865',
        method: 'GET',
      };
      request(call, (error, response, body) => {
        chai.expect(response.statusCode).to.equal(200);
        chai.expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });
});

describe('regex integration testing', () => {
  describe('GET /cart/:id', () => {
    it('endpoint GET /cart/:id', () => {
      chai.request('http://localhost:7865')
        .get('/cart/12')
        .end((err, res) => {
          if (err) throw err;
          chai.expect(res.statusCode).to.equal(200);
          chai.expect(res.text).to.equal('Payment methods for cart 12');
        });
    })
    it('endpoint GET /cart/:isNaN', () => {
      chai.request('http://localhost:7865')
        .get('/cart/anything')
        .end((err, res) => {
          if (err) throw err;
          chai.expect(res.statusCode).to.equal(404);
        });
    })
  })
});
