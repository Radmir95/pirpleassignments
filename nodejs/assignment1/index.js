var http = require('http');
var url = require('url');


var server = http.createServer((req, res)=>{

	const parsedUrl = url.parse(req.url);

	const path = parsedUrl.pathname;

	const trimmedPath = path.replace(/^\/+|\/+$/g, '');


	const chosenHandler = typeof(router[trimmedPath]) === 'undefined' ? router['notFound'] : router[trimmedPath];


	chosenHandler((statusCode)=>{
		res.end(statusCode.toString());


	});


});

server.listen(3000, ()=>{
	console.log('NodeJS server listening port 3000.');
});

const handlers = {};


handlers.hello = function(callback) {
	if (typeof(callback) == 'function')
		callback(200, {hello: "hello world!"});	


}


handlers.notFound = function(callback){
	if (typeof(callback) == 'function')
		callback(404);

}


const router = {
	'hello' : handlers.hello,
	'notFound' : handlers.notFound
};

