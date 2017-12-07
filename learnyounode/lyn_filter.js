var fs = require('fs');
var path = require('path');

var dir = process.argv[3];
var extension = '.' + process.argv[4];

fs.readdir(dir, function (err, files) {
  if (err) 
  return console.error(err);
   files.forEach(function (file) {
    if (path.extname(file) == extension) {
      console.log(file);
    }
   });
});
