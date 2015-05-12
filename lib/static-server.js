var Hapi   = require('hapi');
var server = new Hapi.Server();
var port   = process.env.PORT || 5000; // let heroku or env set port number
server.connection({ port: port });
server.route([{ method: '*', path: '/{param*}', handler: { directory: { path: __dirname +'/../' } } } ]);
server.start(function() { console.log('Static Server Listening on: http://127.0.0.1:' +port) });
