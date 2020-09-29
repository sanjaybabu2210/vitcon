
var mongoose = require("mongoose");

//SCHEMA SETUP
var facultySchema = new mongoose.Schema({
	name:String,
	comments: String,
	email: String
	
});
module.exports = mongoose.model("faculty",facultySchema);