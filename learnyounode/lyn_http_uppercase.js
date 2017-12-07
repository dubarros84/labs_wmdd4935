var http = require('http');
var map = require('through2-map');

var server = http.createServer(function (req, res) {
  if (req.method !== 'POST') {
    return res.end('text\n');
  }

  req.pipe(map(function (contents) {
    return contents.toString().toUpperCase();
  }))

  .pipe(res);

});

server.listen(Number(process.argv[2]));