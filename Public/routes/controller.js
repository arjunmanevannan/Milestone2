var express = require('express');
var Connection = require('./../models/Connection.js')
var router = express.Router();
var connectionDB = require('./../models/ConnectionDB.js')


router.use(express.urlencoded()); //https://stackoverflow.com/questions/4295782/how-to-process-post-data-in-node-js
router.use(express.json());

router.get('/connections', function(req, res){
  var connections = connectionDB.getConnections();
  res.render('connections', {obj:connections});
});

router.get('/newConnection', function(req,res){
  res.render('newConnection');
});

router.post('/', function(req, res){
  var newConnection = new Connection(req.body.connection.topic+Math.random(), req.body.connection.name, req.body.connection.host, req.body.connection.topic, req.body.connection.details, req.body.connection.date, req.body.connection.time);
  console.log(newConnection);

  connectionDB.addConnection(newConnection);
  var connections = connectionDB.getConnections();
  console.log(connections.length);
  res.render('connections', {obj:connections});
});

router.get('/connection', function(req, res){
  console.log(req.query.connectionID);
  if(typeof req.query.connectionID === 'undefined'){
    console.log("No connection ID given. Redirecting to connections");
    var connections = connectionDB.getConnections();
    res.render('connections', {obj:connections});
  }
  else if(typeof req.query.connectionID !== 'undefined') {
    var connection = connectionDB.getConnection(req.query.connectionID);
    if(connection!==null){
        res.render('connection', {obj:connection});
      }
      else{
        console.log("There is no talk hosted in the mentioned ID. Redirecting to all connections");
        var connections = connectionDB.getConnections();
        res.render('connections', {obj:connections});
      }
  }
});


module.exports = router;
