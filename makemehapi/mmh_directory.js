var Hapi = require('hapi');
    var Inert = require('inert');
var Path = require('path');

var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: '3009'
});

server.register(Inert, (err) => {
    if (err) throw err;
});

server.route({                                                                                                                                   
    method: 'GET',                                                                                                                               
    path: '/testing/files/{filename}',                                                                                                           
    handler: {                                                                                                                                   
        directory: {                                                                                                                             
            path: Path.join(__dirname, 'public')                                                                                                 
        }                                                                                                                                        
    }                                                                                                                                            
});   

server.start((err) => {
    if (err) throw err;
    console.log('Server running at:', server.info.uri);
});