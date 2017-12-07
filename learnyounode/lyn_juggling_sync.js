var http = require('http');
var bl = require('bl');
var output = [];
var counter = 0;

for (var i = 0; i < 3; i++) {
  httpGetRequest(i);
}

function httpGetRequest (array) {
  http.get(process.argv[2 + array], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err);
      }

     output[array] = data.toString();
     
     counter++;

      if (counter === 3) {
        results();
      }
    }));
  });
}

function results() {
  for (var i = 0; i < 3; i++) {
    console.log(output[i]);
  }
}