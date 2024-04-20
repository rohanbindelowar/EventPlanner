const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); // Add this line to import the cors middleware
const db = require('./config/db');
const eventsRouter = require('./routes/events');
const eventPlannersRouter = require('./routes/eventPlanners');
const usersRouter = require('./routes/users');
const vendorsRouter = require('./routes/vendors');

const app = express();
const port = 5000;

// Connect to MongoDB
mongoose.connect(db.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');

    // Middleware
    app.use(cors()); // Use cors middleware here

    app.use(bodyParser.json());

    // Routes
    app.use('/events', eventsRouter);
    app.use('/eventplanners', eventPlannersRouter);
    app.use('/users', usersRouter);
    app.use('/vendors', vendorsRouter);

    // Start the server
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
    app.get('/', (req, res) => {
      res.send('Hello, world!');
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

module.exports = app;
