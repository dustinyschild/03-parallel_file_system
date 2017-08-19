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

exports.readAll = function(file1,file2,file3,callback){
  exports.readData(file1,(err,data) => {
    console.log(data);
    exports.readData(file2,(err,data) => {
      console.log(data);
      exports.readData(file3,(err,data) => {
        console.log(data);
        callback(null,data);
      });
    });
  });
};
