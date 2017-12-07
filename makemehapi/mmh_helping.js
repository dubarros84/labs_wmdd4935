var Hapi = require('hapi');
var view = require('view');
var Path = require('path');

var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: "3009"
});

server.register(view, (err) => {
    if (err) throw err;
});

server.views({
    path: Path.join(__dirname, 'templates'),
    engines: {
        html: require('handlebars')
    },
    helpersPath:  Path.join(__dirname, 'helpers')
});

server.route({
    method: 'GET',
    path: '/',
    handler: {
        view: 'template.html'
    }
});

server.start((err) => {
    if (err) throw err;
    console.log('Server running at:', server.info.uri);
});