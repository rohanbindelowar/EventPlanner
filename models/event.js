// models/event.js

const mongoose = require('mongoose');

// Define the schema for the "events" collection
const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'EventPlanner',
    required: true
  }
});

// Create a model for the "events" collection
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
