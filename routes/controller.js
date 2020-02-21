var express = require('express');
var router = express.Router();
var connectionDB = require('./../models/ConnectionDB.js')

router.get('/connections', function(req, res){
  var connections = connectionDB.getConnections();
  res.render('connections', {obj:connections});
});

router.get('/connection', function(req, res){
  if((typeof req.query.connectionID !== 'undefined')) {
    var connection = connectionDB.getConnection(req.query.connectionID);
    console.log(connection);
    if(connection!==null){
      res.render('connection', {obj:connection});
    }
    else{
      res.render('connections');
    }
  }
  else{
    res.render('connections')
  }
});

module.exports = router;
