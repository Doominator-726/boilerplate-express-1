let express = require('express');
let app = express();

// #1
// console.log("Hello World");

// #2
//app.get("/", function(req, res) {
  //  res.send("Hello Express");
//  });

var abspath = __dirname + '/views/index.html';

app.get("/", function(req, res) {
    res.sendFile(abspath);
})






























 module.exports = app;
