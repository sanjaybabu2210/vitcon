var express = require("express"),
    app = express(),
	middleware = require("./middleware/index.js"),

	passport = require('passport'),
	cookieSession = require('cookie-session'),
	// assert = require('assert'),
    bodyParser = require("body-parser"),

    mongoose = require("mongoose"),
	// dotenv = require('dotenv'),
	// url = 'mongodb+srv://vkvamsi24:abba@1234@cluster0-xnzej.mongodb.net/test?retryWrites=true&w=majority',
	Comment = require("./models/comment"),
	Campground = require("./models/campground"),
	Share = require("./models/share"),
	Faculty = require("./models/faculty"),

	passport = require("passport"),
	flash = require("connect-flash"),
	LocalStrategy = require("passport-local"),
	FacebookStrategy = require("passport-facebook"),
	methodOverride = require("method-override"),
	User = require("./models/user"),
	configAuth = require("./auth");
require('./passport-setup');



var assert = require('assert');
var _ = require('underscore');
var url = 'mongodb+srv://vkvamsi24:abba@1234@cluster0-xnzej.mongodb.net/test?retryWrites=true&w=majority';
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(url);
const dbName = 'projectx';
const cors = require('cors');
app.use(cors());

// const MongoClient = require('mongodb').MongoClient;

// const client = new MongoClient(url);
// const dbName = 'projectx';
// dotenv.config();
//requring routescd 
////
const forceSecure = require("force-secure-express");

app.use(forceSecure([
    "www.vitrendz.tech",
    "https://www.vitconnex.com"
]));

app.use(forceSecure([
    "www.vitconnex.com",
    "https://www.vitconnex.com"
]));


// const upload = require('./multer')
// const cloudinary = require('./cloudinary')

// app.use(bodyParser.urlencoded({
//   extended: false
// }))
// app.use(bodyParser.json())

// app.use('/upload-images', upload.array('img'), async (req, res) => {

//   const uploader = async (path) => await cloudinary.uploads(path, 'Images');

//   if (req.method === 'POST') {
//     const urls = []
//     const files = req.files;
//     for (const file of files) {
//       const { path } = file;
//       const newPath = await uploader(path)
//       urls.push(newPath)
//       fs.unlinkSync(path)
//     }

//     res.status(200).json({
//       message: 'images uploaded successfully',
//       data: urls
//     })

//   } else {
//     res.status(405).json({
//       err: `${req.method} method not allowed`
//     })
//   }
// })

// module.exports = app;










const isLogedIn = (req,res,next) => {
	if(req.user){
		next();
	}else{
			req.flash("error","please make sure you are logged in ");
			res.redirect("/login");
	}
}








mongoose.connect('mongodb+srv://sanjaybabu:hNsnLfx9IHgRnuBb@cluster1-fu4qm.mongodb.net/vitWeb?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useCreateIndex: true
}).then(() => {
	console.log('Connected to DB!!');
}).catch(err => {
	console.log('ERROR:', err.message);
});

app.use(cookieSession({
  name: 'vitconnex-session',
  keys: ['key1', 'key2']
}))


app.use(passport.initialize());
app.use(passport.session());

var commentRoutes = require("./routes/comments"),
	ShareRoutes = require("./routes/share")
	adpostRoutes = require("./routes/adPost"),
	authRoutes = require("./routes/index")
	require('dotenv').config()


mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.set("view engine","ejs")
app.use(express.static(__dirname +"/public"))
app.use(methodOverride("_method"));
app.use(flash());

//seedDB(); // seed the database

// const request = require('request');

// request('https://vitacademic-rel.herokuapp.com/api/v2/vellore/faculty', { json: true }, (err, res, body) => {
//   if (err) { return console.log(err); }
//   console.log(body.url);
//   console.log(body.explanation);
// });
//const curl = new (require( 'https://vitacademics-rel.herokuapp.com/api/v2/system' ))();



// Campground.create({
// 		name: "Granite Hill", 				image:"https://pixaby.com/get/57e9d2474c53a814f6da8c7dda793f7f1636dfe2564c704c732772d39f4ecc5d_340.jpg"},function(err,campgrounds
		
// 		){
// 	if(er){
// 		onsoe.log(err);
// 	}else{
// 		onsole.log("newy created campground");
// 		console.log(campgrounds);
// 	}
// });


app.get('/lab', function(req, res, next){
 res.render("lab.ejs")
});
app.get('/one', function(req, res, next){
 res.render("one.ejs")
});
app.get('/two', function(req, res, next){
 res.render("two.ejs")
});
app.get('/three', function(req, res, next){
 res.render("three.ejs")
});
app.get('/four', function(req, res, next){
 res.render("four.ejs")
});
app.get('/five', function(req, res, next){
 res.render("five.ejs")
});
app.get('/six', function(req, res, next){
 res.render("six.ejs")
});
app.get('/seven', function(req, res, next){
 res.render("seven.ejs")
});
app.get('/eight', function(req, res, next){
 res.render("eight.ejs")
});
app.get('/nine', function(req, res, next){
 res.render("nine.ejs")
});
app.get('/ten', function(req, res, next){
 res.render("ten.ejs")
});
app.get('/eleven', function(req, res, next){
 res.render("eleven.ejs")
});
app.get('/twelve', function(req, res, next){
 res.render("twelve.ejs")
});



app.get('/ads.txt',  (req,res)=> 
		res.render('../ads.ejs'));


app.get('/good', isLogedIn, (req,res)=> 
		res.redirect('/faculty'));
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/good');
  });








app.get("/faculty/:id",function(req,res){
	//find the campground with provided id and show
	  var noMatch = null;
	  var resultArray = [];

	var name = req.params.id;
	var newname = name.replace("%20"," ")
	newname = newname.trim()
	console.log(newname);
	var facultyname= newname;
  MongoClient.connect(url, function(err, client){
    assert.equal(null, err);
	  if(err){
		  res.redirect("/");
	  }
    const db = client.db(dbName);
	  var cursor = null;
	  
	 try{
    db.collection('facultydata').find({"facultyname": facultyname},function(err,faculty){
		
		if(err){
			res.redirect('/')
		}else{
			cursor = faculty;
		}
		
		
		
		
	})}catch(error){
		console.log(error);
	}   
		  
		  cursor.forEach(function(doc, err) {
        assert.equal(null, err);
		if(err){
			res.redirect('/');
		}else{
			    resultArray.push(doc);

		}
    }, function(){
      
      console.log(resultArray[0])
			  if(resultArray[0]==undefined){
				  res.redirect('/');
				  return;
			  }
			  try{
				  		var facname= resultArray[0].facultyname;

			  }catch(error){
				  console.log(error)
			  }
		var facschool= resultArray[0].facultyschool;
		var nofr= resultArray[0].nor;
		var r1= resultArray[0].friendly;
		var r2= resultArray[0].teaching;
		var r3= resultArray[0].notes;
		var r4= resultArray[0].overall;
		console.log(nofr);
		if(!nofr){
r1 =parseInt('0');
			r2=parseInt('0');
			r3=parseInt('0');
			r4=parseInt('0');
		}
		
		
		
		var data=  {  facname: facname, facschool: facschool, nofr: nofr, r1:r1, r2:r2,r3:r3,r4:r4 }
		console.log(data);
	
Faculty.find({ name: newname}, function(err, faculty){
           if(err){
               console.log(err);
           } else {
              if(faculty.length < 1) {
                  noMatch = "No Comments found for the selected faculty";
              }
			   console.log(faculty);
              res.render("facultyshow",{faculty:faculty,data:data, noMatch: noMatch});
			  
           }
        });
});
	  });
  });


app.get('/faculty', middleware.isLoggedIn, function(req, res, next){

	
	

  var resultArray = [];
  MongoClient.connect(url, function(err, client){
    assert.equal(null, err);
	  if(err){
		  res.redirect("/");
	  }
    const db = client.db(dbName);
	  var cursor = null;
	  
	   try{
 
    }catch(error){
       console.log(error)
    }
	  try{
    db.collection('facultydata').find({},function(err,faculty){
		
		if(err){
			res.redirect('/')
		}else{
			cursor = faculty;
		}
		
		
		
		
	})}catch(error){
		console.log(error);
	}
	  cursor.forEach(function(doc, err) {
        assert.equal(null, err);
		if(err){
			res.redirect('/');
		}
        resultArray.push(doc);
    }, function(){
      
      res.render("index.ejs",{resultarray:resultArray});
    });
  });
});


app.post('/getfaculty2',function(req, res, next){
  var resultArray = [];
	var myArray=[];
	var facultyname= req.body.name
	facultyname = facultyname.trim();
	var y1=Number(req.body.friendliness)
	var y2=Number(req.body.teaching)
	var y3=Number(req.body.notes)
	var y4= Number(req.body.overall)
	var	asas=req.user.username
	var email=asas;
	var name = req.body.name;
	name = name.trim();
	var email = req.user.username;
	var comments = req.body.comments;
	var faculty = { name: name, email: email, comments: comments}
		
		Faculty.create(faculty, function(err,newlyCreated){
		if(err){
			req.flash('error', err.message);
			console.log(newlyCreated);
	
		}else{
			
			console.log(newlyCreated);
		}
	});
  MongoClient.connect(url, function(err, client){
    assert.equal(null, err);
	  if(err){
		  res.redirect("/");
	  }
    const db = client.db(dbName);
	  var cursor = null;
	  try{
    db.collection('facultydata').find({"facultyname": facultyname},function(err,faculty){
		
		if(err){
			res.redirect('/')
		}else{
			cursor = faculty;
		}
		
		
		
		
	})}catch(error){
		console.log(error);
	}
	  const newItem = {
  "facultyname": facultyname,
  "email": email 
};
	 db.collection('userdata').insertOne(newItem)
    cursor.forEach(function(doc, err) {
        assert.equal(null, err);
		if(err){
			res.redirect('/');
		}
        resultArray.push(doc);
    }, function(){
      var t1= Number(resultArray[0].friendly)
	  var t2=Number( resultArray[0].teaching)
	  var t3= Number(resultArray[0].notes)
	  var t4= Number(resultArray[0].overall)
	  var t5= Number(resultArray[0].nor)
	  
	  t1=((t1*t5)+y1)/(t5+1)
		t2=((t2*t5)+y2)/(t5+1)
		t3=((t3*t5)+y3)/(t5+1)
		t4=((t4*t5)+y4)/(t5+1)
		t5=t5+1
		
		try{
		var cursora=db.collection('userdata').find({$and:[{"facultyname":facultyname},{"email":email}]});
		}catch(error){
			console.log(error);
		}
		 cursora.forEach(function(doc, err) {
        assert.equal(null, err);
			 	if(err){
			res.redirect('/');
		}
        myArray.push(doc);
    }, function(){
			 if (myArray.length==1){
				 db.collection('facultydata').updateMany(
{"facultyname" : facultyname},
{$set: { "friendly" : t1}});
		db.collection('facultydata').updateMany(
{"facultyname" : facultyname},
{$set: { "teaching" : t2}});
		db.collection('facultydata').updateMany(
{"facultyname" : facultyname},
{$set: { "notes" : t3}});
		db.collection('facultydata').updateMany(
{"facultyname" : facultyname},
{$set: { "overall" : t4}});
		db.collection('facultydata').updateMany(
{"facultyname" : facultyname},
{$set: { "nor" : t5}});
				 res.render('fourthindex.ejs')
				 
			 }
			 else{
				 res.render('sixthindex.ejs')
			 }
      console.log(myArray)
			 console.log(myArray.length)
      
			 
		 })
		
		
		
    })
		
		
		
		
	 
	  
	  
	  
	  
	  
		
		
		
    });
	
	
		// User.find({'username':req.user._id}, function(err, user){
		// 	if(err){
		// 		res.redirect("back");
		// 	} else{
		// 		var review = user.reviewed;
		// 		review.push(facultyname);
		// 		User.update({'username':req.user._id},{$set:{'reviewed':review}})
			
		// 	}
		// });

});

app.get('/getfaculty1', function(req, res, next){
  var resultArray = [];
	
	if(req.query.facultyname){
		console.log(req.query.facultyaname);
	var facultyname= req.query.facultyname;
			facultyname = facultyname.trim();
		
  MongoClient.connect(url, function(err, client){
    assert.equal(null, err);
	  	if(err){
			res.redirect('/');
		}
    const db = client.db(dbName);
	  var cursor = null;
	  
	  try{
    db.collection('facultydata').find({"facultyname": facultyname},function(err,faculty){
		
		if(err){
			res.redirect('/')
		}else{
			cursor = faculty;
		}
		
		
		
		
	});	 }catch(error){
		console.log(error);
		
  }
	  
	  
	  
    cursor.forEach(function(doc, err) {
        assert.equal(null, err);
			if(err){
			res.redirect('/');
		}
        resultArray.push(doc);
    }, function(){
		if(resultArray.length==0){
		  res.render("errorpage.ejs")
	  }
		else{
      
      console.log(resultArray[0])
		var facname= resultArray[0].facultyname;
		var facschool= resultArray[0].facultyschool;
		var nofr= resultArray[0].nor;
		var r1= resultArray[0].friendly;
		var r2= resultArray[0].teaching;
		var r3= resultArray[0].notes;
		var r4= resultArray[0].overall;
		
		res.render("secondindex.ejs", { data: { facname: facname, facschool: facschool, nofr: nofr, r1:r1, r2:r2,r3:r3,r4:r4 } })
		}
		
    });
	
  });
	}else{
		res.redirect("/faculty");
	}
	

});

app.get('/getfaculty2', function(req, res, next){
  var resultArray = [];
	
	
	if(req.query.facultyname){
		var facultyname= req.query.facultyname;
	facultyname = facultyname.trim();
	console.log(facultyname)
  MongoClient.connect(url, function(err, client){
    assert.equal(null, err);
	  	if(err){
			res.redirect('/');
		}
    const db = client.db(dbName);
	  
	  try{
    db.collection('facultydata').find({"facultyname": facultyname},function(err,faculty){
		
		if(err){
			res.redirect('/')
		}else{
			cursor = faculty;
		}
												  
												  
												  
	})}catch(error){
		console.log(error);
	}
		
		
		
    cursor.forEach(function(doc, err) {
        assert.equal(null, err);
		if(err){
			res.redirect('/');
		}
        resultArray.push(doc);
    }, function(){
		if(resultArray.length==0){
		  res.render("errorpage.ejs")
	  }
		else{
      
      console.log(resultArray[0])
		var facname= resultArray[0].facultyname;
		var facschool= resultArray[0].facultyschool;
		var nofr= resultArray[0].nor;
		var r1= resultArray[0].friendly;
		var r2= resultArray[0].teaching;
		var r3= resultArray[0].notes;
		var r4= resultArray[0].overall;
		res.render("thirdindex.ejs", { data: { facname: facname, facschool: facschool, nofr: nofr, r1:r1, r2:r2,r3:r3,r4:r4 } })
		}
		
    });
  });
		
	}else{
		res.redirect("/faculty");
	}
	
});


app.get('/gettopfaculty',function(req, res, next){
  
	var resultArray = [];
	if(req.query.coursen){
		var coursename= req.query.coursen;
	coursename = coursename.trim();
	
  MongoClient.connect(url, function(err, client){
    assert.equal(null, err);
	  	if(err){
			res.redirect('/');
		}
    const db = client.db(dbName);
    var cursor =null;
	  try{
	  db.collection('facultydata').find({"coursename": coursename},function(err,data){
		  
		  if(err){
			  res.redirect("/");
		  }else{
			  cursor = data;
		  }
		  
	  })}catch(error){
		  console.log(error);
	  }
    cursor.forEach(function(doc, err) {
        assert.equal(null, err);
		if(err){
			res.redirect("/");
		}
        resultArray.push(doc);
		console.log(resultArray);
    }, function(){
		if(resultArray.length==0){
		  res.render("errorpage.ejs")
	  }
		else{
      
      var result= _.sortBy(resultArray, 'overall');
		result = result.reverse()
		console.log(result)
		var uarray1=[];
		var uarray2=[];
		for(i=0;i<10;i++){
			if(i<result.length){
				uarray1[i] = result[i].facultyname
				uarray2[i] = result[i].overall
			}
			else{
				uarray1[i] = "-"
				uarray2[i] = "-"
				
			}
		}
		console.log(uarray1)
		console.log(uarray2)
		for(i=0;i<uarray1.length;i++){
			if(uarray2[i]<=2){
				uarray1[i]= "-"
			}
		}
		
		
		
		
		
		var tu1= uarray1[0];
		var tu2=uarray1[1];
		var tu3=uarray1[2];
		var tu4=uarray1[3];
		var tu5=uarray1[4];
		var tu6=uarray1[5];
		var tu7=uarray1[6];
		var tu8=uarray1[7];
		var tu9=uarray1[8];
		var tu10=uarray1[9];
		
		
		
	res.render("fifthindex.ejs", { bata: {tu1: tu1, tu2: tu2, tu3: tu3, tu4:tu4, tu5:tu5,tu6:tu6,tu7:tu7,tu8:tu8,tu9:tu9,tu10:tu10}
  });
		}
});
  });
	}else{
		res.redirect("/faculty");
	}

	
});
	  





// app.get('/faculty', function(req, res, next){
//   var resultArray = [];
//   MongoClient.connect(url, function(err, client){
//     assert.equal(null, err);
//     const db = client.db(dbName);
//     var cursor = db.collection('facultydata').find();
//     cursor.forEach(function(doc, err) {
//         assert.equal(null, err);
//         resultArray.push(doc);
//     }, function(){
      
//       res.render("adPost/faculty.ejs",{resultarray:resultArray});
//     });
//   });
// });


// app.post('/postrating', middleware.checkReviewPosted, function(req, res, next){
//   var resultArray = [];
// 	var facultyname= req.body.name
// 	var y1=Number(req.body.friendliness)
// 	var y2=Number(req.body.teaching)
// 	var y3=Number(req.body.notes)
// 	var y4= Number(req.body.overall)
//   MongoClient.connect(url, function(err, client){
//     const db = client.db(dbName);
//     var cursor = db.collection('facultydata').find({"facultyname": facultyname});
//     cursor.forEach(function(doc, err) {
//         resultArray.push(doc);
//     }, function(){
      
//       var t1= Number(resultArray[0].friendly)
// 	  var t2=Number( resultArray[0].teaching)
// 	  var t3= Number(resultArray[0].notes)
// 	  var t4= Number(resultArray[0].overall)
// 	  var t5= Number(resultArray[0].nor)
	  
// 	  t1=((t1*t5)+y1)/(t5+1)
// 	  t2=((t2*t5)+y2)/(t5+1)
// 	  t3=((t3*t5)+y3)/(t5+1)
// 	  t4=((t4*t5)+y4)/(t5+1)
// 	  t5= t5 + 1
		
// 		db.collection('facultydata').update(
// {"facultyname" : facultyname},
// {$set: { "friendly" : t1}});
// 		db.collection('facultydata').update(
// {"facultyname" : facultyname},
// {$set: { "teaching" : t2}});
// 		db.collection('facultydata').update(
// {"facultyname" : facultyname},
// {$set: { "notes" : t3}});
// 		db.collection('facultydata').updateMany(
// {"facultyname" : facultyname},
// {$set: { "overall" : t4}});
// 		db.collection('facultydata').update(
// {"facultyname" : facultyname},
// {$set: { "nor" : t5}});
// 		res.render('fourthindex.ejs')
// 		// User.find({'username':req.user._id}, function(err, user){
// 		// 	if(err){
// 		// 		res.redirect("back");
// 		// 	} else{
// 		// 		user.reviewed = true;
				
				
// 		// 		 user.save(function(err) {
// 		// if (err){
// 		// 				console.log(err);
// 		// 			}else{
// 		// 				return 
// 		// 			}
                    
// 		// });
				
// 			// }
// 		// });
			
			
			
			
	  
	  
	  
	  
	  
		
		
	
//     });
//   });
// });
// app.post('/getfaculty1', function(req, res, next){
//   var resultArray = [];
// 	console.log(req.body.facultyaname)
// 	var facultyname= req.body.facultyname
//   MongoClient.connect(url, function(err, client){
//     assert.equal(null, err);
//     const db = client.db(dbName);
//     var cursor = db.collection('facultydata').find({"facultyname": facultyname});
//     cursor.forEach(function(doc, err) {
//         assert.equal(null, err);
//         resultArray.push(doc);
//     }, function(){
      
//       console.log(resultArray[0])
// 		var facname= resultArray[0].facultyname;
// 		var facschool= resultArray[0].facultyschool;
// 		var nofr= resultArray[0].nor;
// 		var r1= resultArray[0].friendly;
// 		var r2= resultArray[0].teaching;
// 		var r3= resultArray[0].notes;
// 		var r4= resultArray[0].overall;
		
// 		res.render("secondindex.ejs", { data: { facname: facname, facschool: facschool, nofr: nofr, r1:r1, r2:r2,r3:r3,r4:r4 } })
		
//     });
//   });
// });

// app.post('/getfaculty2', function(req, res, next){
//   var resultArray = [];
// 	var facultyname= req.body.facultyname
// 	console.log(facultyname)
//   MongoClient.connect(url, function(err, client){
//     assert.equal(null, err);
//     const db = client.db(dbName);
//     var cursor = db.collection('facultydata').find({"facultyname": facultyname});
//     cursor.forEach(function(doc, err) {
//         assert.equal(null, err);
//         resultArray.push(doc);
//     }, function(){
      
//       console.log(resultArray[0])
// 		var facname= resultArray[0].facultyname;
// 		var facschool= resultArray[0].facultyschool;
// 		var nofr= resultArray[0].nor;
// 		var r1= resultArray[0].friendly;
// 		var r2= resultArray[0].teaching;
// 		var r3= resultArray[0].notes;
// 		var r4= resultArray[0].overall;
// 		res.render("thirdindex.ejs", { data: { facname: facname, facschool: facschool, nofr: nofr, r1:r1, r2:r2,r3:r3,r4:r4 } })
		
//     });
//   });
// });


// app.post('/gettopfaculty', function(req, res, next){
  
//   var resultArray = [];
// 	var coursename= req.body.coursen
//   MongoClient.connect(url, function(err, client){
//     assert.equal(null, err);
//     const db = client.db(dbName);
//     var cursor = db.collection('facultydata').find({"coursename": coursename});
//     cursor.forEach(function(doc, err) {
//         assert.equal(null, err);
//         resultArray.push(doc);
// 		console.log(resultArray);
//     }, function(){
      
//       var result= _.sortBy(resultArray, 'overall');
// 		result = result.reverse()
// 		console.log(result)
// 		var uarray1=[];
// 		var uarray2=[];
// 		for(i=0;i<10;i++){
// 			if(i<result.length){
// 				uarray1[i] = result[i].facultyname
// 				uarray2[i] = result[i].overall
// 			}
// 			else{
// 				uarray1[i] = "-"
// 				uarray2[i] = "-"
				
// 			}
// 		}
// 		console.log(uarray1)
// 		console.log(uarray2)
// 		for(i=0;i<uarray1.length;i++){
// 			if(uarray2[i]<=2){
// 				uarray1[i]= "-"
// 			}
// 		}
		
		
		
		
		
// 		var tu1= uarray1[0];
// 		var tu2=uarray1[1];
// 		var tu3=uarray1[2];
// 		var tu4=uarray1[3];
// 		var tu5=uarray1[4];
// 		var tu6=uarray1[5];
// 		var tu7=uarray1[6];
// 		var tu8=uarray1[7];
// 		var tu9=uarray1[8];
// 		var tu10=uarray1[9];
		
		
		
// 	res.render("fifthindex.ejs", { bata: {tu1: tu1, tu2: tu2, tu3: tu3, tu4:tu4, tu5:tu5,tu6:tu6,tu7:tu7,tu8:tu8,tu9:tu9,tu10:tu10}
//   });
// });
//   });
// });
app.locals.moment = require('moment');
//PASSPORT CONFIGURATION

app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//to use current user in every single file
app.use(function(req,res, next){
		res.locals.currentUser = req.user;
		res.locals.error = req.flash("error");
		res.locals.success = req.flash("success");
		next();
		});

app.use(authRoutes);
app.use("/", ShareRoutes)
app.use("/adPost", adpostRoutes);
app.use("/adPost/:id/comments", commentRoutes);
//facebook authentication
passport.use(new FacebookStrategy({
    clientID: configAuth.facebookAuth.clientID,
    clientSecret: configAuth.facebookAuth.clientSecret,
    callbackURL: configAuth.facebookAuth.callbackURL
  },
  function(accessToken, refreshToken, profile, cb) {
		process.nextTick(function(){
			User.findOne({'facebook.id': profile.id},function(err, user){
				if(err)
					return done(err);
				if(user)
					return done(null, user);
				else {
					var newUser = new User();
					newUser.facebook.id = profile.id;
					newUser.facebook.token = accessToken;
					newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
					newUser.facebook.email = profile.emails[0].value;
					newUser.save(function(err){
						if(err)
							return err;
						return done(null,newUser);
				
			})
		}
	
    });
			 
  });
}
));
app.get('/logout', (req,res) => {
	req.session = null;
	req.logout();
	res.redirect('/');
})

app.listen(process.env.PORT || 7000)