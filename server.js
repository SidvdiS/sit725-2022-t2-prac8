const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const addNumbers = (num1, num2) => {
  var n1 = Number(num1);
  var n2 = Number(num2);
  var result = n1 + n2;
  return result;
};

app.get("/addTwoNumbers", (req, res) => {
  var n1 = req.query.number1;
  var n2 = req.query.number2;
  var result = addNumbers(n1, n2);
  res.json({ statusCode: 200, data: result, message: "Success!" });
});

var port = process.env.port || 3000;

app.listen(port, () => {
  console.log("App running at http://localhost:" + port);
});
