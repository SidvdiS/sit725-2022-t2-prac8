const add = (req, res) => {
  let n1 = Number(req.query.num1);
  let n2 = Number(req.query.num2);
  let result = n1 + n2;
  res.send({ success: true, data: result });
};

const subtract = (req, res) => {
  let n1 = Number(req.query.num1);
  let n2 = Number(req.query.num2);
  let result = n1 - n2;
  res.send({ success: true, data: result });
};

const multiply = (req, res) => {
  let n1 = Number(req.body.num1);
  let n2 = Number(req.body.num2);
  let result = n1 * n2;
  res.send({ success: true, data: result });
};

const divide = (req, res) => {
  let n1 = Number(req.body.num1);
  let n2 = Number(req.body.num2);
  let result = n1 / n2;
  res.send({ success: true, data: result });
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
