var Hapi = require('hapi');
var Inert = require('inert');
var Path = require('path');

var server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: __dirname
    }    }
    }
});


server.connection({
    host: 'localhost',
    port: "3009"
});

server.register(Inert, (err) => {
    if (err) throw err;
});



server.register([  
	  require('./routes/controller')
	], (err) => {

	  if (err) {
	    throw err;
	  }

	  server.start((err) => {
	    console.log('Server running at:', server.info.uri);
	  });

	});