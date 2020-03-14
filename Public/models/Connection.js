class Connection {
    constructor(connectionID, name, host, topic, details, date, time){
      this.connectionID = connectionID;
      this.name = name;
      this.host = host;
      this.topic = topic;
      this.details = details;
      this.date = date;
      this.time = time;
    }
}


module.exports = Connection;
