// models/eventPlanner.js

const mongoose = require('mongoose');

// Define the schema for the "eventPlanners" collection
const eventPlannerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  events: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event'
  }]
});

// Create a model for the "eventPlanners" collection
const EventPlanner = mongoose.model('EventPlanner', eventPlannerSchema);

module.exports = EventPlanner;
