 var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
	username: {type: String, unique : true, required: true},
	name:{type: String,  required: true},
	
	password: String,

	  
	verified: {type:Boolean, default:false},
	year: String,
	reviewed: {type:[String], default:['null']},

	resetPasswordToken: String,
	resetPasswordExpires: Date,
	googleId: {type: String, default: 'null'},
	isAdmin: {type: Boolean, default: false}
});
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);