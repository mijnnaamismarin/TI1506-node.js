/* global process */
var express = require("express");
var url = require("url");
var http = require("http");
var app;
var port = 3000;
app = express();
http.createServer(app).listen(port);

app.get("/hello", function (req, res) {
	var query = url.parse(req.url, true).query;
	var name = ( query["name"]!==undefined) ? query["name"] : "Anonymous";
	res.send("<html><head></head><body><h1>Greetings "
		+ name + "</h1></body></html>");
});