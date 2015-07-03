module.exports = {
	MONGODB: {
		URL: process.env.MONGOLAB_URI || "localhost"
	},
	MANDRILL: {
		KEY: process.env.MANDRILL_APIKEY || "XDOlGM4j9OjryLJ_qqwOOw"
	},
	PORT: process.env.PORT || 5000
}
