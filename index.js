// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// inscription
app.get('/inscription', function(req, res) {
    res.render('pages/inscription');
});
// about page 
app.get('/sujet', function(req, res) {
    res.render('pages/sujet');
});

// resultat page
app.get('/resultat', function(req, res) {
    res.render('pages/resultat');
});

app.listen(8080);
console.log('8080 is the magic port');