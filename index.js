var fs = require("fs");
var handlebars = require("handlebars");

module.exports = {
	render: function(resume) {
		return Theme.render(resume);
	}
};

var Theme = {
	render: function(data) {
		var tpl = fs.readFileSync(__dirname + "/resume.template").toString();
		return handlebars.compile(tpl)(data);
	}
};
