const mongoose = require('mongoose');
const db = require('./config/db');
const Event = require('./models/event');
const EventPlanner = require('./models/eventPlanner');
const User = require('./models/user');
const Vendor = require('./models/vendor');
const fs = require('fs');
const path = require('path');

// Connect to MongoDB
mongoose.connect(db.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Read JSON data from files
const eventData = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data', 'events.json'), 'utf8'));
const eventPlannerData = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data', 'eventPlanners.json'), 'utf8'));
const userData = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data', 'users.json'), 'utf8'));
const vendorData = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data', 'vendors.json'), 'utf8'));

// Insert data into MongoDB
const insertData = async () => {
  try {
    await Event.deleteMany();
    await EventPlanner.deleteMany();
    await User.deleteMany();
    await Vendor.deleteMany();

    await Event.insertMany(eventData);
    await EventPlanner.insertMany(eventPlannerData);
    await User.insertMany(userData);
    await Vendor.insertMany(vendorData);

    console.log('Data inserted successfully');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error inserting data:', err);
    mongoose.connection.close();
  }
};

// Run the insertion function
insertData();
