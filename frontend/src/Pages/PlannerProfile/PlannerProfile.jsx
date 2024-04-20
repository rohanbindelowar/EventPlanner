import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import celebration from "../../images/png/celebration.png";
import "./styles.css"
import image from '../../images/png/logo-color.png'

const PlannerProfile = () => {
  const { plannerId } = useParams(); // Get the plannerId from the URL params
  const [plannerInfo, setPlannerInfo] = useState(null);

  // Fetch planner information based on plannerId
  useEffect(() => {
    const fetchPlannerInfo = async () => {
      try {
        const response = await fetch(`http://localhost:5000/eventPlanners/${plannerId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch planner information');
        }
        const plannerData = await response.json();

        // Fetch events associated with the planner's fullName
        // Fetch events associated with the planner's fullName
        const eventsResponse = await fetch(`http://localhost:5000/events`);
        if (!eventsResponse.ok) {
          throw new Error('Failed to fetch events');
        }
        const eventsData = await eventsResponse.json();
        console.log(eventsData);
        const filteredEvents = eventsData.filter(event => event.eventPlanner === plannerData.fullName);
        console.log(filteredEvents);

        // Update the plannerInfo state with the plannerData and eventsData
        setPlannerInfo({ ...plannerData, events: filteredEvents});
      } catch (error) {
        console.error('Error fetching planner information:', error);
      }
    };

    fetchPlannerInfo();
  }, [plannerId]);

  return (
    <div className="container-planner">
      {plannerInfo ? (
        <div className="host">
          <img src={image} alt={plannerInfo.fullName} className="profile" />
          <h2>{plannerInfo.fullName}</h2>
          <p className="specialization">{plannerInfo.yearsOfExperience} of experience</p>
          <p>{plannerInfo.companyName}</p>
          <p>
            <span className="rate">$1500 - $2000</span> per event
          </p>
          <a href={`mailto:${plannerInfo.email}`} className="contact-button">
            Click here to contact
          </a>

          <div className="events">
            <h3>Events Hosted by {plannerInfo.fullName}</h3>
            {plannerInfo.events.map((event) => (
              <div className="event" key={event.id}>
                <div>
                  <img src={celebration} alt={`Event by ${plannerInfo.fullName}`} />
                </div>
                <div>
                  <h4>{event.name}</h4>
                  <p>{event.description}</p>
                  <p>Date: {event.date}</p>
                  <p>Location: {event.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PlannerProfile;
