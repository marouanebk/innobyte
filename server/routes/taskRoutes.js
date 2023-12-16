const express = require("express");

//import from controller
const { createTask, getTask } = require("../controllers/taskController");

const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

// check if auth
router.use(protect);

//create new command
router.post("/create", createTask);
router.get("/get", getTask);

module.exports = router;
