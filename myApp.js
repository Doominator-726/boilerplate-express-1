
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

// var abspath = __dirname + '/public';
// app.use("/public", express.static(abspath));

// # 5

app.get("/json", function(req, res) {

    var message = "Hello json";
    if (process.env.MESSAGE_STYLE === uppercase)
    {
        message = message.toUpperCase();
    }
    res.json({"message": message});
  });























 module.exports = app;
