import React, { useEffect, useState } from "react";
import "./styles.css";
import image from "../../../images/png/logo.png";
import { NavLink } from "react-router-dom";

export const EventList = ({ category }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`http://localhost:5000/events`);
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        const filteredEvents = data.filter((event) => event.category === category);
        setEvents(filteredEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, [category]);

  return (
    <div>
      <section className="event-profile-cards">
        {events.map((event) => (
          <div className="container-profile-card" key={event._id}>
            <NavLink to={`/EventPlanner/event-profile/${event._id}`} className="event-profile-card">
              <div>
                <img src={image} alt="" className="profile" />
              </div>
              <div className="details">
                <h3>{event.name}</h3>
                <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                <p>{event.location}</p>
              </div>
            </NavLink>
          </div>
        ))}
      </section>
    </div>
  );
};


