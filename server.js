var express = require("express");
var bodyparser = require("body-parser");
var app = express();

var Firebase = require("firebase");

app.use(bodyparser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var stripe = require("stripe")(
  "sk_test_BQokikJOvBiI2HlWgH4olfQ2"
);
app.listen(3000);