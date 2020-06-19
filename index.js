var http = require('http');
var url = require('url');
var filesystem = require('fs');

http.createServer((req, res) => {
	var q = url.parse(req.url, true);
	const filename = q.pathname !== '/' ? `.${q.pathname}.html` : 'index.html';

	filesystem.readFile(filename, (error, data) => {
		if(error){
			res.writeHead(404, { 'Content-Type': 'text/html' });
			return res.end(`<h1>404 Not found</h1> <a href='/'>Index</a>`);
		}
		res.writeHead(200, { 'Content-type': 'text/html' });
		res.write(data);
		return res.end();
	});
}).listen(8000);
