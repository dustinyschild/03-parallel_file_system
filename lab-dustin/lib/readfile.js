'use strict';

const { readFile } = require('fs');

exports.readData = function(file, callback) {
  readFile(`${__dirname}/../assets/${file}`, function(err, buff){
    if (err) { callback(err); }
    console.log(file);
    console.log(buff.toString('hex').slice(0,8));
    if(callback) { callback(null,
      {
        hex: buff.toString('hex').slice(0,8),
        filepath: `${__dirname}/../assets/${file}`,
        concatStrings: '596f206d4b6e6f6343687563'
      });
    }
  });
};

exports.readAll = function(data1,data2,data3,callback){
  exports.readData(data1, () => {
    exports.readData(data2, () => {
      exports.readData(data3);
    });
  });
  if(callback) { callback(null, '?'); }
};
//hi keith
exports.readAll('yomamma.txt','knockknock.txt','chucknorris.txt');
