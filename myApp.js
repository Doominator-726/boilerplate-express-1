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
app.use(abspath, express.static());




























 module.exports = app;
