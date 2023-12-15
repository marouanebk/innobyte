const mongoose = require('mongoose')
const User =require('./UserModel')

const Workflow =require('./WorkFlowModel')



// Define the workspace schema
const workspaceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  joinId: {
    type: String,
  },
  maxUsers: {
    type: Number,
    required: true,
    min: 1
  },
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  members: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
      },
      role: {
        type: String,
        enum: ["admin", "editor", "viewer"],
        default: "viewer"
      }
    }
  ],
  type: {
    type: String,
    enum: ["free", "paid"],
    default: "free"
  },
  workflows: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Workflow"
    }
  ]
});

// Define the workspace model
// export const workspaceSchema = mongoose.model("Workspace", workspaceSchema);

const workspace = mongoose.model('WorkSpace', workspaceSchema)


module.exports = {
    workspace}
