'use strict';
const assert = require('assert');
const read = require('../lib/readfile');

describe('Read File Module', function(){
  describe('#readFile()', function(){
    it('should read the yomammafile', function(){
      read.readData('yomamma.txt', function(err, data) {
        //tests with callback data from callback
        assert.ifError(err);
        assert.equal();
      });
    });
  });
});
