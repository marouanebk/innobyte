const mongoose = require("mongoose");
const { Task } = require("../models/taskModel");
const { Project } = require("../models/projectModel");

const createTask = async (req, res) => {
  try {
    const task = new Task({
      task_name: req.body.task_name,
      task_details: req.body.task_details,
    });
    await task.save();

    await Project.findByIdAndUpdate(
      req.body.workspace_id,
      { $push: { projects: task._id } },
      { new: true }
    );
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json(err);
  }
};

const getTask = async (req, res) => {
  try {
    const project = await Task.findById(req.params.id);

    res.status(200).json(project);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { createTask, getTask };
