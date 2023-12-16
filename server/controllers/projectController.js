const mongoose = require("mongoose");
const { workspace } = require("../models/WorkSpaceModel");
const { Project } = require("../models/projectModel");

const createProject = async (req, res) => {
  try {
    const project = new Project({
      project_name: req.body.project_name,
      members: req.body.members,
    });
    await project.save();

    await workspace.findByIdAndUpdate(
      req.body.workspace_id,
      { $push: { projects: project._id } },
      { new: true }
    );
    res.status(200).json(workspace);
  } catch (err) {
    res.status(400).json(err);
  }
};

const getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate(
      "members.user"
    );

    res.status(200).json(project);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { createProject, getProject, getWorkspace };
