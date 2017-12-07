var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, function (err, data) {
  if (err) {
    return console.log(err);
  }
  var output = data.toString().split('\n').length - 1;
  console.log(output);
});
