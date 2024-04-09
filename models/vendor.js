// models/vendor.js

const mongoose = require('mongoose');

// Define the schema for the "vendors" collection
const vendorSchema = new mongoose.Schema({
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
  services: [{
    type: String
  }]
});

// Create a model for the "vendors" collection
const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;
