const express = require("express");
const router = express.Router();
const {
  add,
  subtract,
  multiply,
  divide,
} = require("../controllers/calculator");

//Add and Subtract using GET Method
router.get("/add", add);
router.get("/subtract", subtract);

// Multiply and Divide using POST Method
router.post("/multiply", multiply);
router.post("/divide", divide);

module.exports = router;
