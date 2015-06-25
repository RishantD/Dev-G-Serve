var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var subscriberSchema = new Schema({
	createdAt: {type: Date, default: Date.now},
	email: {type: String, required: true, unique: true},
	fname: {type: String, required: true},
	lname: {type: String, required: true},
	role: {type: String, required: true}
});

module.exports = mongoose.model('Subscriber', subscriberSchema);
