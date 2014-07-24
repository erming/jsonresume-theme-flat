//
// Run a local theme development server.
//
// When running this script, it will load the local `index.js` file
// and then try to call `index.render()`.
//
// Don't forget to install `resume-schema` via npm.
//
// Usage:
// `node serve`
//
// By Mattias Erming
// http://github.com/erming
//

var http = require("http");
var resume = require("resume-schema").resumeJson;
var theme = require("./index.js");

var port = 8080;
http.createServer(function(req, res) {
	res.writeHead(200, {"Content-Type": "text/html"});
	res.end(render());
}).listen(port);

console.log("Serving theme");
console.log("Preview: http://localhost:8080/");

function render() {
	try {
		return theme.render(resume);
	} catch(e) {
		console.log("Error: " + e.message);
		return "";
	}
}
