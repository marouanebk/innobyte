// Import mongoose module
const mongoose = require("mongoose");
const Task =require('./taskModel')

// Define the schema for the timeline data
const projectSchema = new mongoose.Schema({
  project_name: {
    type: String,
    required: true,
  },
  members: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    //   role: {
    //     type: String,
    //     enum: ["admin", "editor", "viewer"],
    //     default: "viewer",
    //   },
    },
  ],
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task"
    }
  ]


});

// Create and export the model for the timeline collection
const Project = mongoose.model("Project", projectSchema);

module.exports = {
  Project,
};
