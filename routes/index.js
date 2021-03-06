var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
var Campground = require("../models/campground");
var async = require("async");
var nodemailer = require("nodemailer");
var crypto = require("crypto");
var exphbs = require("express-handlebars");
var messagebird = require("messagebird")('puCDEk8mQjUVGkv4dqaz3p1lx');
var size = require('window-size');


router.get("/",function(req,res){
	res.render("landing");
	
}); 
router.get("/hostels",function(req,res){
	res.render("hostel");
});
router.get("/privacy",function(req,res){
	res.render("adPost/privacy");
});

// router.get("/contest/vitconnexQuestionPaperGroup",function(req,res){
	
// 	Contest.find({}).sort({count:-1}).limit(10).exec(function(err, contestant) {

// 		if(err){
// 			console.log(err);
// 		}else{
		
// 				res.render("adPost/contest",{member:contestant});
// 		}
// 	});
	
	
	

router.get("/about",function(req,res){
	res.render("adPost/about");
})
router.get("/contact",function(req,res){
	res.render("adPost/contact");
})
router.get("/faq",function(req,res){
	res.render("adPost/faq");
})




//===============
//AUTH ROUTES
//============
router.get("/register", function(req,res){
	res.redirect("/auth/google");
})
router.get("/sitemap", function(req,res){
	res.render("sitemap");
})
router.get("/register/admin", function(req,res){
	res.render("admin",{page: 'register'});
})
//HANDLE SIGN UP LOGIC
router.post("/register", function(req,res){
	
	async.waterfall([
	function(done) {
	crypto.randomBytes(20, function(err, buf) {
	var token = buf.toString('hex');
	done(err, token);
	});
	},
	function(token, done) {
					User.findOne({ username: req.body.username }, function(err, user) {
					if (user && user.verified) {
					req.flash('error', 'Oops! this Email Id has already been registered. ');
					return res.redirect('/login');
					}
					else if(user && !(user.verified)){
					User.deleteOne(user, function(err,usr){
						if(err){
							console.log(err)
						}else{
							console.log(usr);           
							var exp =  Date.now() + 3600000;  
					var newUser = {username: req.body.username,name:req.body.name, year: req.body.year, resetPasswordToken: token, resetPasswordExpires: exp };
						if(req.body.adminCode === "Tyc00n2020"){
								newUser.isAdmin = true;
							}
														
// var newcontest = {username:req.body.username,name:req.body.name,count:1}
// 					Contest.create(newcontest, function(err,newlyCreated){
// 						if(err){
// 							req.flash('error', err.message);
// 							return res.redirect('back');
// 							console.log("bad");
// 						}else{

// 							console.log("created");
// 						}
// 					});

					User.register(newUser, req.body.password, function(err, user){
						if(err){
							console.log(user);

					return res.render("login", {error: err.message});
							}
						else{
							console.log(user);
							console.log(req.body.adminCode);
							console.log(newUser.isAdmin);
						passport.authenticate("local")(req, res, function(){
							console.log(user);
							req.flash("success","Welcome to VITCONNEX "  + user.name);
						});
																 var smtpTransport = nodemailer.createTransport({
											service: 'Gmail', 
											auth: {
											  user: 'vitconnex@gmail.com',
											  pass: 'viteeenext2020'
											}
										  });
										  var mailOptions = {
											to: user.username,
											from: 'vitconnex@gmail.com',
											subject: 'VITCONNEX ACCOUNT VERIFICATION',
											text: 'You are receiving this because you (or someone else) have tried to sign in for VITCONNEX account.\n\n' +
											  'Please click on the following link, or paste this into your browser to verify your account:\n\n' +
											  'https://' + req.headers.host + '/verify/' + token + '\n\n' +
											  'If you did not request this, please ignore this email \n'
										  };
										  smtpTransport.sendMail(mailOptions, function(err) {
											console.log('mail sent');
											req.flash('success', 'An e-mail has been sent to ' + user.username + ' with further instructions to verify the account.');
											done(err, 'done');
										  });
														
										
						}
						});
					}
					});
					}
					else{
							

						 var exp =  Date.now() + 3600000;  
					var newUser = {username: req.body.username,name:req.body.name, year: req.body.year, resetPasswordToken: token, resetPasswordExpires: exp };
	if(req.body.adminCode === "Tyc00n2020"){
								newUser.isAdmin = true;
							}
														


					User.register(newUser, req.body.password, function(err, user){
						if(err){
							console.log(user);

					return res.render("login", {error: err.message});
							}
						else{
							console.log(user);
						passport.authenticate("local")(req, res, function(){
							console.log(user);
							req.flash("success","Welcome to vitblog " + user.name);
						});
							 var smtpTransport = nodemailer.createTransport({
        service: 'Gmail', 
        auth: {
          user: 'vitconnex@gmail.com',
          pass: 'viteeenext2020'
        }
      });
      var mailOptions = {
        to: user.username,
        from: 'vitconnex@gmail.com',
        subject: 'VITCONNEX ACCOUNT VERIFICATION',
        text: 'You are receiving this because you (or someone else) have tried to sign in for VITCONNEX account.\n\n' +
          'Please click on the following link, or paste this into your browser to verify your account:\n\n' +
          'https://' + req.headers.host + '/verify/' + token + '\n\n' +
          'If you did not request this, please ignore this email \n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        console.log('mail sent');
        req.flash('success', 'An e-mail has been sent to ' + user.username + ' with further instructions.');
        done(err, 'done');
      });
						}
						});
						}
					})
		},
   
  ], function(err) {
    if (err){
		console.log(err)};
    res.redirect('/register');
  });
	
	
});
//SHOW LOGIN FORM
router.get("/login",function(req,res){
	res.redirect("/auth/google");
})
//handling loginlogic
router.post("/login", passport.authenticate("local", 
    {successRedirect:"/adPost",
	failureRedirect: "/login",
	  badRequestMessage : 'Missing username or password.',
    failureFlash: true
	}),function(req,res){
		
		return req.flash("error", "User Name is not registered");
	
		
	
});
// logout route


router.get('/auth/facebook',
  passport.authenticate('facebook',{scope:['email']}));

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/adPost');
  });



router.get("/logout",function(req,res){
	req.logout();
	req.flash("success", "Logged you out");
	res.redirect("/adPost");
	
});



//forget password
router.get('/forgot', function(req, res) {
  res.render('forgot');
});

router.post('/forgot', function(req, res, next) {
  async.waterfall([
    function(done) {
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    function(token, done) {
      User.findOne({ username: req.body.username }, function(err, user) {
        if (!user) {
          req.flash('error', 'No account with that email address exists.');
          return res.redirect('/forgot');
        }

        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

        user.save(function(err) {
          done(err, token, user);
        });
      });
    },
    function(token, user, done) {
      var smtpTransport = nodemailer.createTransport({
        service: 'Gmail', 
        auth: {
          user: 'vitconnex@gmail.com',
          pass: 'viteeenext2020'
        }
      });
      var mailOptions = {
        to: user.username,
        from: 'VitConnex@gmail.com',
        subject: 'VITCONNEX Password Reset',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          'https://' + req.headers.host + '/reset/' + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        console.log('mail sent');
        req.flash('success', 'An e-mail has been sent to ' + user.username + ' with further instructions.');
        done(err, 'done');
      });
    }
  ], function(err) {
    if (err) return next(err);
    res.redirect('/forgot');
  });
});

router.get('/reset/:token', function(req, res) {
  User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
    if (!user) {
      req.flash('error', 'Password reset token is invalid or has expired.');
      return res.redirect('/forgot');
    }
    res.render('reset', {token: req.params.token});
  });
});
router.get('/verify/:token', function(req, res) {
  User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
    if (!user) {
      req.flash('error', 'verify token is invalid or has expired.');
      return res.redirect('/register');
    }
 
	  user.verified = true;
	  user.resetPasswordToken = undefined;
            user.resetPasswordExpires = undefined;
	   user.save(function(err) {
          if(err){
			  req.flash('error',err);
		  }
		   res.redirect('/adPost');
        });
	  
  });
});

router.post('/reset/:token', function(req, res) {
  async.waterfall([
    function(done) {
      User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
        if (!user) {
          req.flash('error', 'Password reset token is invalid or has expired.');
          return res.redirect('back');
        }
        if(req.body.password === req.body.confirm) {
          user.setPassword(req.body.password, function(err) {
            user.resetPasswordToken = undefined;
            user.resetPasswordExpires = undefined;

            user.save(function(err) {
              req.logIn(user, function(err) {
                done(err, user);
              });
            });
          })
        } else {
            req.flash("error", "Passwords do not match.");
            return res.redirect('back');
        }
      });
    },
    function(user, done) {
      var smtpTransport = nodemailer.createTransport({
        service: 'Gmail', 
        auth: {
          user: 'vitconnex@gmail.com',
          pass: 'viteeenext2020'
        }
      });
      var mailOptions = {
        to: user.username,
        from: 'vitconnex@gmail.com',
        subject: 'Your password has been changed',
        text: 'Hello,\n\n' +
          'This is a confirmation that the password for your account ' + user.username + ' has just been changed.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        req.flash('success', 'Success! Your password has been changed.');
        done(err);
      });
    }
  ], function(err) {
    res.redirect('/adPost');
  });
});
//User profile
router.get("/users/:id", function(req,res){
	User.findById(req.params.id, function(err, foundUser1){
		if(err){
			req.flash("error", "Something went wrong");
			res.redirect("/");
		} else{
			Campground.find().where('author.id').equals(foundUser1._id).exec(function(err, allAds){
				if(err){
					req.flash("error", "Something went wrong");
			res.redirect("/");
				}
			console.log(allAds);
				console.log(foundUser1);
			res.render("users/show", {user: foundUser1, campgrounds: allAds});
			})
		}
	});
});

// curl -X POST https://rest.messagebird.com/messages -H 'Authorization: AccessKey puCDEk8mQjUVGkv4dqaz3p1lx' -d "recipients=+9199436-77316" -d "originator=+9199436-77316" -d "body=Hi! This is your first message."

module.exports = router;