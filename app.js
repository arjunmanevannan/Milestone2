var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

// app.get('/', function(req,res){
//   res.render('index');
// });

app.get('/', function(req,res){
  res.render('savedConnections');
});

app.listen(3000);
