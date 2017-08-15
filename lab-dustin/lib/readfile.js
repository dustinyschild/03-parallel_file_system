'use strict';

const { readFile } = require('fs');

function readData(file/*, callback*/) {
  readFile(`${__dirname}/../assets/${file}`, function(err, buff){
    /*if (err) { callback(err); }*/

    console.log(`Data from ${__dirname}/../assets/${file}`);
    console.log('Buffer ', buff);

    //if(callback) { callback(null, buff); }
  });
}//;

readData('yomamma.txt');
