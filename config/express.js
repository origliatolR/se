var express = require('express'),
	methodOverride = require('method-override'),
	bodyParser = require('body-parser');

module.exports = function() {
	var app = express();

	app.use(methodOverride());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));

	app.set('view engine', 'jade');
	app.set('views', './App/views');

	app.use(express.static('./public'));

	require('../App/routes/index.server.routes')(app);
	require('../App/routes/mainform.server.routes')(app);

	return app;
};