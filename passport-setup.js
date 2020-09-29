const passport = require('passport');
var User = require("./models/user");

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(null, user);
  });
});


passport.use(new GoogleStrategy({
    clientID: '1615070795-9m0rkdaa01jggipf5qsrt9k63kk0k2qt.apps.googleusercontent.com',
    clientSecret: 'AiedCimAgbYsQpSq3Wyr7ZdQ',
    callbackURL: "https://www.vitconnex.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
	
	
	
     // make the code asynchronous
    // User.findOne won't fire until we have all our data back from Google
    process.nextTick(function() {

        // try to find the user based on their google id
        User.findOne({ 'username' : profile.emails[0].value }, function(err, user) {
            if (err)
                return done(err);

            if (user) {

                // if a user is found, log them in
                return done(null, user);
            } else {
                // if the user isnt in our database, create a new user
                var newUser          = new User();
                console.log(profile);
                //JSON.parse(profile);
                // set all of the relevant information
                newUser.googleId    = profile.id;
           
				newUser.year = null;
				newUser.verified = true;
				
                newUser.name  = profile.displayName;
                newUser.username = profile.emails[0].value; // pull the first email
                
                console.log(newUser.name);
                //console.log(profile.picture);

                // save the user
                newUser.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, newUser);
                });
            }
        });
    });
  }
));