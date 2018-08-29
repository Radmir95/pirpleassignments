var http = require('http');
var url = require('url');


var server = http.createServer((req, res)=>{

	const parsedUrl = url.parse(req.url);

	console.log(JSON.stringify(parsedUrl));

});


server.listen(3000, ()=>{
	console.log('NodeJS server listening port 3000.');
});



const handlers = {};


handlers.hello = function(data, callback) {
	


}


handlers.notFound = function(data, callback){



}


const router = {
	'hello' : handlers.hello,
	'notFound' : handlers.notFound
};

