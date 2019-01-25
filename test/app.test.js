var app = require('../app'),
  assert = require('assert'),
  http = require('http'),
  request = require('request');


describe('GET /', function () {
  before(function () {
    var port = '3000';
    app.set('port', port);
    var server = http.createServer(app);
    server.listen(port);
  });

  it('should return a 200 status code', function (done) {
    request({
      url: 'http://localhost:3000/'
    }, function (error, response, body) {
      // Do more stuff with 'body' here
      if(error){
        throw new Error(error);
      }
      assert.deepEqual(response.statusCode, 200);
      done();
    });
  });

  it('should contain mlabs in body', function (done) {
    request({
      url: 'http://localhost:3000/'
    }, function (error, response, body) {
      // Do more stuff with 'body' here
      if(error){
        throw new Error(error);
      }
      assert.deepEqual(response.body, "mlabs");
      done();
    });
  });

});