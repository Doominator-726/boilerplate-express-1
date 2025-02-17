
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

// # 5

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
  });
  
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























 module.exports = app;
