const express = require("express");
const router = express.Router();
let client = require("../dbConnect");

let skillsCollection;

setTimeout(() => {
  skillsCollection = client.MongoClient.db().collection("skills");
}, 2000);

const insertSkills = (project, callback) => {
  skillsCollection.insert(project, callback);
};

const getSkills = (callback) => {
  skillsCollection.find({}).toArray(callback);
};

router.get("/", (req, res) => {
  getSkills((err, result) => {
    if (err) {
      res.json({ statusCode: 400, message: err });
    } else {
      res.json({ statusCode: 200, message: "Success", data: result });
    }
  });
});

router.post("/", (req, res) => {
  console.log("New Skill added", req.body);

  var newSkill = req.body;

  insertSkills(newSkill, (err, result) => {
    if (err) {
      res.json({ statusCode: 400, message: err });
    } else {
      res.json({
        statusCode: 200,
        message: "Skill Successfully added",
        data: result,
      });
    }
  });
});

module.exports = router;
