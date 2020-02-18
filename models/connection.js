class Connection {
    constructor(connectionID, name, topic, details, date){
      this.connectionID = connectionID;
      this.name = name;
      this.topic = topic;
      this.details = details;
      this.date = date;
    }

    // getCourseID(){
    //   return ${this.courseID};
    // }
    //
    // getTitle(){
    //   return ${this.title};
    // }
    //
    // getTerm(){
    //   return ${this.term};
    // }
    //
    // getInstructor(){
    //   return ${this.instructor};
    // }
}

module.exports = Connection;
