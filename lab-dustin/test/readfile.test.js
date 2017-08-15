'use strict';
const assert = require('assert');
const read = require('../lib/readfile');

describe('Read File Module', function(){
  describe('#readFile()', function(){
    it('should return first 8 bytes in hex format of yomamma.js', function(done){
      read.readData('yomamma.txt', function(err, data) {
        //tests with data from callback
        assert.ifError(err);
        assert.strictEqual(data, '596f206d');

        done();
      });
    });
    it('should return first 8 bytes in hex format of knockknock.js', function(done){
      read.readData('knockknock.txt', function(err, data) {
        //tests with data from callback
        assert.ifError(err);
        assert.strictEqual(data, '4b6e6f63');

        done();
      });
    });
  });
});
