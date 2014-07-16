var fs = require("fs");
var Handlebars = require("handlebars");

module.exports = {
	render: function(resume) {
		return Theme.render(resume);
	}
};

var Theme = {
	render: function(data) {
		var tpl = fs.readFileSync(__dirname + "/resume.template").toString();
		return Handlebars.compile(tpl)(data);
	}
};

Handlebars.registerHelper("formatDate", function(value) {
	var date = (value || "").toString();
	if (!date) {
		return "Present";
	} else {
		return date.substr(0, 4);
	}
});

Handlebars.registerHelper("nl2br", function(value) {
	return value.replace(/\n/g, "</p><p>");
});
