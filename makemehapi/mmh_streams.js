var fs = require('fs');
var Hapi = require('hapi');
var Path = require('path');
var Rot = require('rot13-transform');

var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: '3009'
});

server.route({
    method: 'GET',
    path: '/',
    config: {
        handler: (request, reply) => {
            var file = fs.createReadStream(Path.join(__dirname, 'sometext.txt'));
            reply(file.pipe(Rot()));
        }
    }
});

server.start((err) => {
    if (err) throw err;
    console.log('Server running at:', server.info.uri);
});