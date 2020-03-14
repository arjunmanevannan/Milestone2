var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
var details = require('./routes/controller.js')
app.use('/', details);

app.get('/', function(req,res){
  res.render('index');
});

app.get('/savedConnections', function(req,res){
  res.render('savedConnections');
});

app.get('/about', function(req,res){
  res.render('about');
});

app.get('/contact', function(req,res){
  res.render('contact');
});

app.listen(3000);
