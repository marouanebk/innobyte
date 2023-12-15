// Import mongoose module
const mongoose = require("mongoose");

// Define the schema for the timeline data
const timelineSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  week_start: { type: Date, required: true },
  week_end: { type: Date, required: true },
  active_hours: [
    {
      day: {
        type: String,
        required: true,
        enum: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
      start: {
        type: String,
        required: true,
        match: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
      },
      end: {
        type: String,
        required: true,
        match: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
      },
    },
  ],
});

// Create and export the model for the timeline collection
const Timeline = mongoose.model("Timeline", timelineSchema);

module.exports = {
  Timeline,
};
