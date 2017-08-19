'use strict';

const { readFile } = require('fs');

exports.readData = function(file, callback) {
  var filePath = `${__dirname}/../assets/${file}`;
  readFile(filePath, function(err, buff){
    if (err) { return callback(err); }
    //console.log(file);
    //console.log(buff.toString('hex').slice(0,8));
    var data = {
      fileData: filePath,
      hex: buff.slice(0,8).toString('hex'),
      filepath: `${__dirname}/../assets/${file}`,
    };
    if(callback) {
      callback(null,data);
    }
  });
};

exports.readAll = function(file1,file2,file3,callback){
  var concatStrings = '';
  exports.readData(file1,(err,data) => {
    if (err) { return callback(err); }
    concatStrings += data.hex;
    console.log(data.hex);
    exports.readData(file2,(err,data) => {
      if (err) { return callback(err); }
      concatStrings += data.hex;
      console.log(data.hex);
      exports.readData(file3,(err,data) => {
        if (err) { return callback(err); }
        concatStrings += data.hex;
        console.log(data.hex);
        callback(null,concatStrings);
      });
    });
  });
};

//exports.readData('chucknorris.txt',(err,data) => console.log(data));
exports.readAll('yomamma.txt','knockknock.txt','chucknorris.txt',(err,data) => console.log('concatStrings: ',data));
