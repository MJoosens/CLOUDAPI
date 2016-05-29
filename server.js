var express = require("express");
var bodyparser = require("body-parser");
var app = express();

var request = require ('request');

var Firebase = require("firebase");

app.use(bodyparser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyparser.urlencoded({ extend: true}));

var port = process.env.PORT || 1337;

var router = express.Router();

router.use(function(req,res,next){

	next();
})
router.get('/',function(req,res){
	res.json({message: "RESPEK BRUU"})
})

app.use('/api', router);


var stripe = require("stripe")(
  "sk_test_BQokikJOvBiI2HlWgH4olfQ2"
);
app.listen(port);
console.log('API is on this one:' + port);

