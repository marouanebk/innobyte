const mongoose = require("mongoose");
const { Workspace } = require("../models/WorkSpaceModel");

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
    const workspace = await Workspace.create({
      name: name,
      manager: userid,
      joinId: generateJoinId(),
    });
    res.status(200).json(workspace);
  } catch (err) {
    res.status(400).json(err);
  }
};

const getWorkspaces = async (req, res) => {
  try {
    const userid = req.body.userid; 
    
    const workspaces  = await Workspace.find();
    
    res.status(200).json(workspaces);
  } catch (err) {
    res.status(400).json(err);
  }
};

const getWorkSpaceById = async (req, res) => {
  try {
    const workspaces  = await Workspace.find();
    
    res.status(200).json(workspaces);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { createWorkSpace, getWorkspaces, getWorkSpaceById };
