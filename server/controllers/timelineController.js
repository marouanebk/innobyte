const mongoose = require("mongoose");
const { Timeline } = require("../models/timelineModel");

const createTimeline = async (req, res) => {
    try {
      // Get the user id and the timeline data from the request
      const user_id = req.user.id;
      const timelineData = req.body;
  
      // Validate the timeline data using the Joi schema
      const { error, value } = Timeline.validate(timelineData);
  
      // Check if the validation passed
      if (error) {
        // Return a 400 bad request error
        res.status(400).send(error.details[0].message);
      } else {
        // Create a new timeline document using the Mongoose model
        const timeline = await Timeline.create(value);
  
        // Return a 200 OK response with the timeline data
        res.status(200).json(timeline);
      }
    } catch (err) {
      // Return a 500 internal server error
      res.status(500).send(err.message);
    }
  };
  
  const getTimeline = async (req, res) => {
    try {
      // Get the user id from the request parameters
      const user_id = req.params.user_id;
  
      // Find the timeline document for the user using the Mongoose model
      const timeline = await Timeline.findOne({ user_id: user_id });
  
      // Check if the timeline exists
      if (timeline) {
        // Return a 200 OK response with the timeline data
        res.status(200).json(timeline);
      } else {
        // Return a 404 not found error
        res.status(404).send("Timeline not found");
      }
    } catch (err) {
      // Return a 500 internal server error
      res.status(500).send(err.message);
    }
  };

module.exports = { createTimeline , getTimeline };
