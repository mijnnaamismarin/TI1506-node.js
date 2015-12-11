var http = require('http'),
	url = require('url');
	
var simpleHTTPResponder = function (req, res) {
	var url_parts = url.parse(req.url, true);
	if (url_parts.pathname === "/overview") {
		res.writeHead(200, {
			"Content-Type": "text/html"
		});
		//var content = retrieve_content();
		//content now contains the generated OVERVIEW page
		res.end("test");
	}
};
var server = http.createServer(simpleHTTPResponder).listen(3000);