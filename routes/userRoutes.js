const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ statusCode: 200, message: "Success", data: { name: "Sid" } });
});

module.exports = router;
