var _ = require("lodash");
var fs = require("fs");

const FILEPATH = "./resume.template";

module.exports = {
	render: function(resume) {
		var tpl = fs.readFileSync(FILEPATH);
		return _.template(tpl, resume);
	}
};
