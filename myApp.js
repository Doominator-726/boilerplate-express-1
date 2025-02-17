
require('dotenv').config();
let express = require('express');
let app = express();

// #1
// console.log("Hello World");

// #2
//app.get("/", function(req, res) {
  //  res.send("Hello Express");
//  });

// #3
//var abspath = __dirname + '/views/index.html';

//app.get("/", function(req, res) {
    //res.sendFile(abspath);
//})

// # 4

var abspath = __dirname + '/public';
app.use("/public", express.static(abspath));

// # 6

app.use(function(req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

// # 5

app.get("/json", function(req, res) {

    console.log("WorkN");
    let message = "Hello json";
    if (process.env.MESSAGE_STYLE==="uppercase")
    {
        console.log("Work");
        message = message.toUpperCase();
    }

    res.json({"message": message});
    
  });

// # 7

// app.get('/now', function(req, res, next) {
  //  req.time = new Date().toString();
  //  next();
//}, function(req, res) {
  //  res.json({time: req.time});
// }
// )

// # 8

app.get("/name", function(req, res) {

  var first = req.query.first;
  var last = req.query.last;

  res.json({"name": `${first} ${last}`});
})






 module.exports = app;
