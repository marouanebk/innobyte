const mongoose = require("mongoose");
const User = require("./UserModel");
const Project = require("./projectModel");

// const Workflow =require('./WorkFlowModel')

// Define the workspace schema
const workspaceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  joinId: {
    type: String,
  },
  maxUsers: {
    type: Number,
    default: 6,
  },
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  members: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      role: {
        type: String,
        enum: ["admin", "editor", "viewer"],
        default: "viewer",
      },
    },
  ],
  type: {
    type: String,
    enum: ["free", "paid"],
    default: "free",
  },
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },
  ],
  // workflows: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Workflow"
  //   }
  // ]
});

// Define the workspace model
// export const workspaceSchema = mongoose.model("Workspace", workspaceSchema);

const Workspace = mongoose.model("WorkSpace", workspaceSchema);

module.exports = {
  Workspace,
};
