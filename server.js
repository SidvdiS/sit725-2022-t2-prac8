const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://SidvdiS:admin@cluster0.lgcgqel.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
let skillCollection;

const createCollection = (collectionName) => {
  client.connect((err, db) => {
    skillCollection = client.db().collection(collectionName);
    if (!err) {
      console.log("MongoDB Connected");
    } else {
      console.log("DB Error: ", err);
      process.exit(1);
    }
  });
};

const cardList = [
  {
    img: "images/materialize.jpg",
    desc: "Designed by Google, Materialize is a responsive frontend web application framework that combines the principles of design along with innovation and technology.",
    url: "https://materializecss.com/",
  },
];

// insert skill...

const insertSkills = (project, callback) => {
  skillCollection.insert(project, callback);
};

// get skills...

const getSkills = (callback) => {
  skillCollection.find({}).toArray(callback);
};

app.get("/api/skills", (req, res) => {
  getSkills((err, result) => {
    if (err) {
      res.json({ statusCode: 400, message: err });
    } else {
      res.json({ statusCode: 200, message: "Success", data: result });
    }
  });
});

app.post("/api/skills", (req, res) => {
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

var port = process.env.port || 3000;

app.listen(port, () => {
  console.log("App running at http://localhost:" + port);
  createCollection("skills");
});
