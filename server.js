const express = require("express");
const app = express();
const cors = require("cors");
const skillsRoutes = require("./routes/skillsRoutes");
const userRoutes = require("./routes/userRoutes");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/skills", skillsRoutes);
app.use("/api/user", userRoutes);

var port = process.env.port || 3000;

app.listen(port, () => {
  console.log("App running at http://localhost:" + port);
});
