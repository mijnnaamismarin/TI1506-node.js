/*
var http = require('http');
var server;
server = http.createServer(function (req, res) {
	res.writeHead(200, {
		"Content-Type": "text/plain"
	});
	res.end("Hello World!");
	console.log("HTTP response sent");
});
var port = 2333;
server.listen(port, function () {
	console.log("Server listening on port " + port);
});
*/

var express = require("express");
var url = require("url");
var http = require("http");
var app;

app = express();
http.createServer(app).listen(1033);

app.get("/", function(req,res) {
	res.send("What?");
})

app.get("/greetings", function (req, res) {
	var query = url.parse(req.url, true).query;
	var name = ( query["name"]!==undefined) ? query["name"] : "Anonymous";
		res.send("Greetings "+name);
	});

app.get("/cheerio", function (req, res) {
	res.send("Cheerio.");
});