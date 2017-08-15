'use strict';

const { readFile } = require('fs');

exports.readData = function(file, callback) {
  readFile(`${__dirname}/../assets/${file}`, function(err, buff){
    if (err) { callback(err); }

    console.log(`Data from ${__dirname}/../assets/${file}`);
    console.log(buff.toString('hex').slice(0,8));

    if(callback) { callback(null, buff.toString('hex').slice(0,8)); }
  });
};

//readData('yomamma.txt');
