// models/eventPlanner.js

const mongoose = require('mongoose');

// Define the schema for the "eventPlanners" collection
const eventPlannerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  profilePicture: {
    type: String
  },
  companyName: {
    type: String,
    required: true
  },
  jobTitle: {
    type: String,
    required: true
  },
  yearsOfExperience: {
    type: Number,
    required: true
  },
  specialties: {
    type: String
  },
  servicesOffered: {
    type: String
  },
  certifications: {
    type: String
  },
  events: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event'
  }]
});

// Create a model for the "eventPlanners" collection
const EventPlanner = mongoose.model('EventPlanner', eventPlannerSchema);

module.exports = EventPlanner;
