var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

// app.get('/', function(req,res){
//   res.render('index');
// });

app.get('/', function(req,res){
  res.render('index');
});

app.get('/savedConnections', function(req,res){
  res.render('savedConnections');
});


app.get('/connections', function(req,res){
  res.render('connections');
});

app.get('/connection', function(req,res){
  res.render('connection');
});

app.listen(3000);
