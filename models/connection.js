class Connection {
    constructor(connectionID, name, topic, details, date){
      this.connectionID = connectionID;
      this.name = name;
      this.topic = topic;
      this.details = details;
      this.date = date;
    }
}

module.exports = Connection;
