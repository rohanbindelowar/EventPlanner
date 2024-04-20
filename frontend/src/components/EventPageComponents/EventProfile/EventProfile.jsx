import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import image from "../../../images/png/logo-color-1.png";
import image1 from "../../../images/png/logo-black.png";
import image2 from "../../../images/png/logo-white.png";
import "./styles.css";

export const EventProfileComponent = () => {
  const { eventId } = useParams(); // Get the event ID from the URL params
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://localhost:5000/events/${eventId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch event');
        }
        const eventData = await response.json();
        setEvent(eventData);
      } catch (error) {
        console.error('Error fetching event:', error);
      }
    };

    fetchEvent();
  }, [eventId]);

  return (
    <div className="en-container">
              <img src={image} alt="Event Image" className="image" />

      <div className="event-details">
        <h1>{event?.name}</h1>
        <p>Date: {event?.date}</p>
        <p>Location: {event?.location}</p>
        <p>Event Planner: {event?.eventPlanner}</p>
        <p>Vendor: {event?.vendor}</p>
        {/* Add more details as needed */}
      </div>
      <div className="picBox">
        <img src={image1} alt="image1" className="image-box" />
        <img src={image2} alt="image2" className="image-box" />
      </div>
    </div>
  );
};

