const { insertSkills, readSkills } = require("../models/skills");

const getSkills = (req, res) => {
  readSkills((err, result) => {
    if (err) {
      res.json({ statusCode: 400, message: err });
    } else {
      res.json({ statusCode: 200, message: "Success", data: result });
    }
  });
};

const createSkills = (req, res) => {
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
};

module.exports = {
  getSkills,
  createSkills,
};
