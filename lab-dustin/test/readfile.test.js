'use strict';
const assert = require('assert');
const read = require('../lib/readfile');

describe('Read File Module', function(){
  describe('#readFile()', function(){
    it('should return first 8 bytes of yomamma.txt in hex format', function(done){
      read.readData('yomamma.txt', function(err, data) {
        //tests with data from callback
        assert.ifError(err);
        assert.strictEqual(data.hex, '596f206d');

        done();
      });
    });
    it('should return first 8 bytes of knockknock.txt in hex format', function(done){
      read.readData('knockknock.txt', function(err, data) {
        //tests with data from callback
        assert.ifError(err);
        assert.strictEqual(data.hex, '4b6e6f63');

        done();
      });
    });
    it('should return first 8 bytes of chucknorris.txt in hex format', function(done){
      read.readData('chucknorris.txt', function(err, data) {
        //tests with data from callback
        assert.ifError(err);
        assert.strictEqual(data.hex, '43687563');

        done();
      });
    });
  });

  describe('#readAll()', function(){
    it('should return concatonated strings in order of: yomama, knockknock, and chucknorris', function(done){
      read.readAll('yomama.txt','knockknock.txt','chucknorris.txt', function(err, data){
        assert.strictEqual(data.concatStrings, '596f206d4b6e6f6343687563');

        done();
      });
    });
  });
});
