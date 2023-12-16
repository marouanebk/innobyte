const mongoose = require("mongoose");
const { Timeline } = require("../models/timelineModel");

const createTimeline = async (req, res) => {
    try {
      const user_id = req.user.id;
      const timelineData = req.body;
  
      const { error, value } = Timeline.validate(timelineData);
  
      if (error) {
        res.status(400).send(error.details[0].message);
      } else {
        const timeline = await Timeline.create(value);
  
        res.status(200).json(timeline);
      }
    } catch (err) {
      res.status(500).send(err.message);
    }
  };
  
  const getTimeline = async (req, res) => {
    try {
      const user_id = req.params.user_id;
  
      const timeline = await Timeline.findOne({ user_id: user_id });
  
      if (timeline) {
        res.status(200).json(timeline);
      } else {
        res.status(404).send("Timeline not found");
      }
    } catch (err) {
      res.status(500).send(err.message);
    }
  };

module.exports = { createTimeline , getTimeline };
