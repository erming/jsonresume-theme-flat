// This script will run a local web server. This is useful when
// developing the theme.

var http = require("http");
var theme = require("./index.js");
var schema = require("resume-schema");
var resume = schema.resumeJson;

var port = 8080;
http.createServer(function(req, res) {	
	res.writeHead(200, {"Content-Type": "text/html"});
	res.end(resume());
}).listen(port);

console.log("Preview: http://localhost:8080/");
console.log("Serving..");

function resume() {
	return theme.render(resume);
}
