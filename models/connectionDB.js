var connection = require('connection.js')
var con1 = new Connection('11','2','3','4','5');
var con2 = new Connection('22','2','3','4','5');
var con3 = new Connection('33','2','3','4','5');
var con4 = new Connection('44','2','3','4','5');
var con5 = new Connection('55','2','3','4','5');

var connections = [con1, con2, con3, con4, con5];

function getConnections(){
  return connections;
}


function getConnection(givenConnectionID){
  for(var i=0;i<connections.length;i++){
    if(connections[i].connectionID == givenConnectionID){
      return connections[i];
      break;
    }
  }
  return null;
}
