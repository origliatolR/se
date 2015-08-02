module.exports = function(app) {
	var mainform = require('../controllers/mainform.server.controller');

	app.get('/mainform', mainform.renderMainForm);
};