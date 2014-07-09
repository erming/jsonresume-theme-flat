var fs = require("fs");
var mustache = require("mustache");

const FILEPATH = __dirname + "/resume.template";

module.exports = {
	render: function(resume) {
		var tpl = fs.readFileSync(FILEPATH).toString();
		return mustache.render(tpl, resume);
	}
};
