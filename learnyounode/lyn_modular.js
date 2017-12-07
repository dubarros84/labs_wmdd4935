var filterFuncn = require('./modular_filter.js');

var directory = process.argv[2];
var filter = process.argv[3];

filterFuncn(directory,filter, function (err, files) {
  if (err) 
  return console.error(err);
   files.forEach(function (file) {
          console.log(file);
   });
});
