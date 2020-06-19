var http = require('http');
var url = require('url');
var filesystem = require('fs');

http.createServer((req, res) => {
	var q = url.parse(req.url, true);
	var filename = '';

	if(q.pathname == '/')
		filename = "./index.html";
	else if(q.pathname == '/about')
		filename = "./about.html";
	else if(q.pathname == '/contact-me')
		filename = "./contact-me.html";
	else
		filename = "./404.html";

	filesystem.readFile(filename, (error, data) => {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		return res.end();
	});
}).listen(8080);
