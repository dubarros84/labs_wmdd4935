var Hapi = require('hapi');
var Joi = require('joi');


var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: '3009'
});

server.route({
    method: 'GET',
    path: '/dogs/{breed}',
    config: {
        handler: (request, reply) => {
            reply('You asked for the dogs ' + request.params.breed);
        },
        validate: {
            params: {
                breed: Joi.string().required()
            }
        }
    }
});

server.start((err) => {
    if (err) throw err;
    console.log('Server running at:', server.info.uri);
});