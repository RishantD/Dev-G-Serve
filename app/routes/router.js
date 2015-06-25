var subscriber = require('./subscriber.js');

module.exports = function(app){
	app.post('/api/subscriber/new', subscriber.new);
}
