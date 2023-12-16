// Import mongoose module
const mongoose = require("mongoose");

// Define the schema for the timeline data
const taskSchema = new mongoose.Schema({
  task_name: {
    type: String,
    required: true,
  },
  task_details: {
    type: String,
    required: true,
  },
  task_status: {
    type: String,
    default: "Todo",
    enum: ["Todo", "In progress", "Waiting for review", "Approved"],
  },

  assigned: [
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
});

// Create and export the model for the timeline collection
const Task = mongoose.model("Task", taskSchema);

module.exports = {
  Project: Task,
};
