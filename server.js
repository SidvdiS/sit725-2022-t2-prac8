const express = require("express");
require("dotenv").config();
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

const http = require("http").createServer(app);
const io = require("socket.io")(http);

io.on("connection", (socket) => {
  console.log("User Connected Successfully", socket.id);

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });

  setInterval(() => {
    socket.emit("slideShow", Math.floor(Math.random() * (4 - 0)) + 0);
  }, 1000);
});

app.get("/addTwoNumbers/:firstNumber/:secondNumber", function (req, res, next) {
  var firstNumber = parseInt(req.params.firstNumber);
  var secondNumber = parseInt(req.params.secondNumber);
  var result = firstNumber + secondNumber;
  if (result == null) {
    res.json({ result: result, statusCode: 400 }).status(400);
  } else {
    res.json({ result: result, statusCode: 200 }).status(200);
  }
});

var port = process.env.port || 3000;

http.listen(port, () => {
  console.log("App running at http://localhost:" + port);
});
