const express = require("express");
const router = express.Router();
const { skillsController } = require("../controller");

router.get("/", skillsController.getSkills);

router.post("/", skillsController.createSkills);

module.exports = router;
