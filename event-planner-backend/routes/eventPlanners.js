// routes/eventPlanners.js

const express = require('express');
const router = express.Router();
const EventPlanner = require('../models/eventPlanner');

router.get('/', async (req, res) => {
  try {
    const eventPlanners = await EventPlanner.find();
    res.json(eventPlanners);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



router.get('/:id', async (req, res) => {
  try {
    const eventPlanner = await EventPlanner.findById(req.params.id);
    if (!eventPlanner) {
      return res.status(404).json({ error: 'Event Planner not found' });
    }
    res.json(eventPlanner);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newEventPlanner = new EventPlanner(req.body);
    await newEventPlanner.save();
    res.status(201).json(newEventPlanner);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedEventPlanner = await EventPlanner.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedEventPlanner) {
      return res.status(404).json({ error: 'Event Planner not found' });
    }
    res.json(updatedEventPlanner);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedEventPlanner = await EventPlanner.findByIdAndDelete(req.params.id);
    if (!deletedEventPlanner) {
      return res.status(404).json({ error: 'Event Planner not found' });
    }
    res.json({ message: 'Event Planner deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
