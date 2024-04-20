// models/vendor.js

const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
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
  profilePicture: String,
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
  specialties: String,
  servicesOffered: String,
  certifications: String
});

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;
