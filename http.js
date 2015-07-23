var connect = require('connect');
var serveStatic = require('serve-static');
var port = 3000;
connect().use(serveStatic(__dirname)).listen(port);
console.log('Server has started at http://localhost:' + port + '/cvss2.html');
