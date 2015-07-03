var config = JSON.parse(process.env.config);

var Subscriber = require('../models/subscriber');
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill(config.MANDRILL.KEY);

module.exports = {
	new: function(req, res){
		var body = req.body;

		var subscriber = new Subscriber({
			email: body.email,
			fname: body.fname,
			lname: body.lname,
			role: body.role
		});
		subscriber.save(function(err, newSubscriber){
			if (err){
				console.log(err);
				return res.status(400).send({message: "Unknown Error"});
			}
			var template_name = "Welcome";
	    var template_content = [];
	    var message = {
	        "subject": "Welcome to GooRoo",
	        "from_email": "gooroo.us@gmail.com",
	        "to": [{
	          "email": body.email,
	          "name": body.fname,
	          "type": "to"
	        }],
			"global_merge_vars": [
				{
		            "name": "FNAME",
		            "content": body.fname
		        }
			]
	    };
	    mandrill_client.messages.sendTemplate({"template_name": template_name, "template_content": template_content, "message": message}, function(result) {
	      return res.status(200).send({message: "New subscriber created"});
	    }, function(err) {
				console.log(err);
	      return res.status(400).send({message: "Unknown error"})
	    });
		});
	}
}
