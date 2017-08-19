'use strict';
const assert = require('assert');
const read = require('../lib/readfile');

describe('Read File Module', function(){
  describe('#readFile()', function(){
    it('should return first 8 bytes of yomamma.txt in hex format', function(done){
      read.readData('yomamma.txt', function(err, data) {
        //tests with data from callback
        assert.ifError(err);
        assert.strictEqual(data.hex, '596f206d616d6d61');

        done();
      });
    });
    it('should return first 8 bytes of knockknock.txt in hex format', function(done){
      read.readData('knockknock.txt', function(err, data) {
        //tests with data from callback
        assert.ifError(err);
        assert.strictEqual(data.hex, '4b6e6f636b2c206b');

        done();
      });
    });
    it('should return first 8 bytes of chucknorris.txt in hex format', function(done){
      read.readData('chucknorris.txt', function(err, data) {
        //tests with data from callback
        assert.ifError(err);
        assert.strictEqual(data.hex, '436875636b204e6f');

        done();
      });
    });
  });

  describe('#readAll()', function(){
    it('should return concatonated strings in order of: yomama, knockknock, and chucknorris', function(done){
      read.readAll('yomamma.txt','knockknock.txt','chucknorris.txt', function(err, data){
        assert.ifError(err);
        assert.strictEqual(data, '596f206d616d6d614b6e6f636b2c206b436875636b204e6f');
        done();
      });
    });
  });
});
