const mongoose = require('mongoose')
const User =require('./UserModel')


const taskSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    deadline: {
      type: Date
    },
    status: {
      type: String,
      enum: ["pending", "in progress", "completed", "approved"],
      required: true
    },
    assignee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    dependency: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task"
    }
  });

  const workflowSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    type: {
      type: String,
      enum: ["sequential", "parallel", "conditional"],
      required: true
    },
    tasks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task"
      }
    ]
  });

  task = mongoose.model('Task', taskSchema)
  workFlow = mongoose.model('WorkFlow', workflowSchema)


  module.exports = {
    task,
    workFlow}
  