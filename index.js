var _ = require("lodash");
var fs = require("fs");

const FILEPATH = __dirname + "/resume.template";

module.exports = {
	render: function(resume) {
		var tpl = fs.readFileSync(FILEPATH);
		return _.template(tpl, resume);
	}
};
