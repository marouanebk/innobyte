const mongoose = require("mongoose");
const { WorkSpaceModel } = require("../models/WorkSpaceModel");

// Helper function to generate a random joinId
const generateJoinId = () => {
  const length = 8;
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
};

// Function to create a workspace

const createWorkSpace = async (req, res) => {
  try {
    const userid = req.user.id;
    const name = req.body.name;
    const workspace = await WorkSpaceModel.create({
      name: name,
      manager: userid,
      joinId: generateJoinId(),
    });
    res.status(200).json(workspace);
  } catch (e) {
    res.status(400).json(err);
  }
};

module.exports = { createWorkSpace };
