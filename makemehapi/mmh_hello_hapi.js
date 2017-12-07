var Hapi = require('hapi');


var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: '3009'
});

server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        reply('Hello Make-me-hapi');
    }
});

server.start((err) => {
    if (err) throw err;
    console.log('Server running at:', server.info.uri);
});