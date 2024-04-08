import React, { useState, useEffect } from 'react';
import { getEventPlanners, getVendors, createEvent, generateUniqueId } from './api';
import './styles.css';

const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    name: '',
    date: '',
    location: '',
    eventPlanner: '',
    vendor: ''
  });
  const [eventPlanners, setEventPlanners] = useState([]);
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    getEventPlanners().then(data => setEventPlanners(data));
    getVendors().then(data => setVendors(data));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEventData({
      ...eventData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const eventId = generateUniqueId();
    const eventObject = {
      id: eventId,
      ...eventData
    };

    try {
      const existingEvents = await getExistingEvents(eventObject);
      if (existingEvents.length > 0) {
        alert('An event with the same name, date, and location already exists!');
      } else {
        await createEvent(eventObject);
        console.log('Event created successfully:', eventObject);
      }
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  const getExistingEvents = async (newEvent) => {
    // Implement logic to fetch existing events and filter based on name, date, and location
    // Example:
    // const existingEvents = await fetchExistingEvents();
    // return existingEvents.filter(event => (
    //   event.name === newEvent.name &&
    //   event.date === newEvent.date &&
    //   event.location === newEvent.location
    // ));
    return []; // Placeholder implementation
  };

  return (
    <div className='body-create-event'>
      <form onSubmit={handleSubmit} className="create-event-form">
        <h2>Create Event</h2>
        <input type="text" name="name" value={eventData.name} onChange={handleChange} placeholder="Event Name" required />
        <input type="date" name="date" value={eventData.date} onChange={handleChange} placeholder="Event Date" required />
        <input type="text" name="location" value={eventData.location} onChange={handleChange} placeholder="Event Location" required />
        <select name="eventPlanner" value={eventData.eventPlanner} onChange={handleChange} required>
          <option value="">Select Event Planner</option>
          {eventPlanners.map(planner => (
            <option key={planner.id} value={planner.id}>{planner.name}</option>
          ))}
        </select>
        <select name="vendor" value={eventData.vendor} onChange={handleChange} required>
          <option value="">Select Vendor</option>
          {vendors.map(vendor => (
            <option key={vendor.id} value={vendor.id}>{vendor.name}</option>
          ))}
        </select>
        <input type="submit" value="Create Event" />
      </form>
    </div>
  );
};

export default CreateEvent;
