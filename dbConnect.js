const { MongoClient } = require("mongodb");
const uri = process.env.DATABASE_URL;
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect((err, db) => {
  if (!err) {
    console.log("MongoDB Connected");
  } else {
    console.log("DB Error: ", err);
    process.exit(1);
  }
});

exports.MongoClient = client;
