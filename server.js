var express = require('express');
var app = express();

app.get('/chat/:token.js', function(req, res) {
    const query = req.query ;

    console.log(query);

    res.sendFile(__dirname + "/file.js");
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(6060);