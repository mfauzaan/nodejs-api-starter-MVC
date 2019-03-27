'use strict'
const path = require('path');

//const replace = require('replace-in-file');
async function keyGenerator() {
  var fs = require('fs')
  var bcrypt = require('bcrypt-nodejs')

  var uniqid = await bcrypt.genSaltSync(10)

  fs.readFile('.env', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace(/APP_KEY=/g, `APP_KEY=${uniqid}`);
  
    fs.writeFile('.env', result, 'utf8', function (err) {
       if (err) return console.log(err);
    });
  });
}

keyGenerator().catch((err) => {
  console.error(err);
});