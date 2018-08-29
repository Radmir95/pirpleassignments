var http = require('http');


var server = http.createServer();


server.listen(3000, ()=>{
	console.log('NodeJS server listening port 3000.');
});

