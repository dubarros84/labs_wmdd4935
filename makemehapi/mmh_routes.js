var Hapi = require('hapi');


var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port:  '3009'
});

server.route({
    method: 'POST',
    path: '/name',
    handler: (request, reply) => {
    	console.log(request.payload.name);
        reply('Hello ' + request.payload.name);
        
    }
});



server.start((err) => {
    if (err) throw err;
    console.log('Server running at:', server.info.uri);
});