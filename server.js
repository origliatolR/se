var express = require('./config/express');

var app = express();

app.listen(3000, function() {
	console.log('server on port 3000')
});

module.exports = app;