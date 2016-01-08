/* global process */
var express = require("express");
var url = require("url");
var http = require("http");
var validator = require("validator");
var app;

var port = 4444;
app = express();
http.createServer(app).listen(port);

app.get("/login", function (req, res) {
	var query = url.parse(req.url, true).query;
	var username = validator.escape(query["username"]);
	var password = query["password"];
	console.log("User login/password sent: ["
		+ username + "],["
		+ password + "]");
	res.send();
});