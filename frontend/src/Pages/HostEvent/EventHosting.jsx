import React, { useState, useEffect } from "react";
import "./styles.css";

const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    name: "",
    category: "",
    date: "",
    location: "",
    eventPlanner: "",
    vendor: "",
  });
  const [eventPlanners, setEventPlanners] = useState([]);
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    fetchEventPlanners();
    fetchVendors();
  }, []);

  const fetchEventPlanners = async () => {
    try {
      const response = await fetch("http://localhost:5000/eventPlanners");
      if (!response.ok) {
        throw new Error("Failed to fetch event planners");
      }
      const data = await response.json();
      setEventPlanners(data);
    } catch (error) {
      console.error("Error fetching event planners:", error);
    }
  };

  const fetchVendors = async () => {
    try {
      const response = await fetch("http://localhost:5000/vendors");
      if (!response.ok) {
        throw new Error("Failed to fetch vendors");
      }
      const data = await response.json();
      setVendors(data);
    } catch (error) {
      console.error("Error fetching vendors:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const eventId = generateUniqueId();
    const eventObject = {
      id: eventId,
      ...eventData,
    };

    try {
      const existingEvents = await getExistingEvents(eventObject);
      if (existingEvents.length > 0) {
        alert(
          "An event with the same name, date, and location already exists!"
        );
      } else {
        await createEvent(eventObject);
        console.log("Event created successfully:", eventObject);
        window.location.href = "http://localhost:3000/EventPlanner/event";
      }
    } catch (error) {
      console.error("Error creating event:", error);
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

  const createEvent = async (eventObject) => {
    try {
      const response = await fetch("http://localhost:5000/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventObject),
      });
      if (!response.ok) {
        throw new Error("Failed to create event");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  const generateUniqueId = () => {
    // Generate a random string of characters
    const randomChars = Math.random().toString(36).substr(2, 10);
    // Generate a timestamp string
    const timestamp = new Date().getTime().toString(36);
    // Combine both strings to form a unique ID
    const uniqueId = randomChars + timestamp;
    return uniqueId;
  };

  return (
    <div className="body-create-event">
      <form onSubmit={handleSubmit} className="create-event-form">
        <h2>Create Event</h2>
        <input
          type="text"
          name="name"
          value={eventData.name}
          onChange={handleChange}
          placeholder="Event Name"
          required
        />
        <select
          name="category"
          value={eventData.category}
          onChange={handleChange}
          required
          placeholder="Type of Event"
        >
          <option value="" disabled>
            Select Event Type
          </option>
          <option value="Birthday">Birthday</option>
          <option value="Wedding">Wedding</option>
          <option value="Graduation">Graduation</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Christmas">Christmas</option>
          <option value="New Year">New Year</option>
          <option value="Super Bowl">Super Bowl</option>
          <option value="Other Celebration">Other Celebration</option>
        </select>

        <input
          type="date"
          name="date"
          value={eventData.date}
          onChange={handleChange}
          placeholder="Event Date"
          required
        />
        <input
          type="text"
          name="location"
          value={eventData.location}
          onChange={handleChange}
          placeholder="Event Location"
          required
        />
        <select
          name="eventPlanner"
          value={eventData.eventPlanner}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select Event Planner</option>
          {eventPlanners.map((planner) => (
            <option key={planner.id} value={planner.fullName}>
              {planner.fullName}
            </option>
          ))}
        </select>
        <select
          name="vendor"
          value={eventData.vendor}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select Vendor</option>
          {vendors.map((vendor) => (
            <option key={vendor.id} value={vendor.fullName}>
              {vendor.fullName}
            </option>
          ))}
        </select>
        <input type="submit" value="Create Event" />
      </form>
    </div>
  );
};

export default CreateEvent;
