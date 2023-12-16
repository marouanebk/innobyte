const express = require("express");

//import from controller
const {
  createWorkSpace,
  getWorkspaces,
  getWorkSpaceById,
  joinWorkspace,
} = require("../controllers/workSpaceController");

const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

// check if auth
router.use(protect);

//create new command
router.post("/create", createWorkSpace);
router.get("/get", getWorkspaces);
router.get("/join", joinWorkspace);
router.get("/get_by_id/:id", getWorkSpaceById);

module.exports = router;
