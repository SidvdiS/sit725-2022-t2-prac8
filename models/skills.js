let client = require("../dbConnect");

let skillsCollection;

setTimeout(() => {
  skillsCollection = client.MongoClient.db().collection("skills");
}, 2000);

const insertSkills = (project, callback) => {
  skillsCollection.insert(project, callback);
};

const readSkills = (callback) => {
  skillsCollection.find({}).toArray(callback);
};

module.exports = {
  insertSkills,
  readSkills,
};
