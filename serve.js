//
// Run a local theme development server.
//
// Usage:
// `node serve`
//
// By Mattias Erming
// http://github.com/erming
//

var http = require("http");
var indicator = require("indicator");
var resume = require("resume-schema").resumeJson;
var theme = require("./index.js");

var port = 8080;
http.createServer(function(req, res) {
	res.writeHead(200, {"Content-Type": "text/html"});
	res.end(render());
}).listen(port);

console.log("Preview: http://localhost:8080/");
indicator.start("Serving..");

function render() {
	try {
		return theme.render(resume);
	} catch(e) {
		console.log("Error: " + e.message);
		return "";
	}
}
