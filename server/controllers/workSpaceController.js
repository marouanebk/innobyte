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
    console.log(userid, name);
    const workspace = await Workspace.create({
      name: name,
      manager: userid,
      joinId: generateJoinId(),
    });
    console.log(workspace);
    res.status(200).json(workspace);
  } catch (err) {
    res.status(400).json(err);
  }
};

const getWorkspaces = async (req, res) => {
  try {
    const userid = req.body.userid;

    const workspaces = await Workspace.find({
      $or: [{ manager: userid }, { members: { $elemMatch: { user: userid } } }],
    });
    res.status(200).json(workspaces);
  } catch (err) {
    res.status(400).json(err);
  }
};

const getWorkSpaceById = async (req, res) => {
  try {
    const workspaceId = req.params.id; // Assuming the workspaceId is provided in the request parameters

    // Find the workspace by ID
    const workspace = await Workspace.findById(workspaceId);

    if (!workspace) {
      return res.status(404).json({ message: 'Workspace not found' });
    }

    res.status(200).json(workspace);
  } catch (err) {
    res.status(400).json(err);
  }
};



const joinWorkspace = async (req, res) => {
  try {
    const userid = req.user.id; // Assuming the user ID is available in the request
    const joinId = req.body.joinId; // Assuming the joinId is provided in the request body

    const workspace = await Workspace.findOne({ joinId });

    if (!workspace) {
      return res.status(404).json({ message: 'Workspace not found with the provided joinId' });
    }

    const isMemberOrManager = workspace.members.some(member => member.user.toString() === userid) || workspace.manager.toString() === userid;

    if (isMemberOrManager) {
      return res.status(400).json({ message: 'User is already a member or manager of the workspace' });
    }

    if (workspace.members.length >= workspace.maxUsers) {
      return res.status(400).json({ message: 'Workspace is full. Cannot join.' });
    }

    workspace.members.push({ user: userid });

    await workspace.save();

    res.status(200).json(workspace);
  } catch (err) {
    res.status(400).json(err);
  }
};


module.exports = { createWorkSpace, getWorkspaces, getWorkSpaceById , joinWorkspace };
