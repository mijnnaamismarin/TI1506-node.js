var express = require("express");
var http = require("http");
var credentials = require("./credentials");
var cookies = require("cookie-parser");

console.log("credentials: " + credentials.cookieSecret);
var app = express();
app.use(cookies(credentials.cookieSecret));
http.createServer(app).listen(3000);

app.get("/sendMeCookies", function (req, res) {
	console.log("Handing out cookies");
	res.cookie("chocolate", "kruemel");
	res.cookie("signed_chocolate", "monster", { signed: true });
	res.send();
});

app.get("/listAllCookies", function (req, res) {
	console.log("++ unsigned ++");
	console.log(req.cookies);
	console.log("++ signed ++");
	console.log(req.signedCookies);
	res.clearCookie("chocolate");
	res.send();
});
