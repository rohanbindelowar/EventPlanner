import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import celebration from "../../images/png/celebration.png";
import "./styles.css"
import image from '../../images/png/logo-color.png'

const VendorProfile = () => {
  const { vendorId } = useParams(); // Get the vendorId from the URL params
  const [vendorInfo, setVendorInfo] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState([]);

  // Fetch vendor information based on vendorId
  useEffect(() => {
    const fetchVendorInfo = async () => {
      try {
        const response = await fetch(`http://localhost:5000/vendors/${vendorId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch vendor information');
        }
        const data = await response.json();
        setVendorInfo(data);

        const eventsResponse = await fetch(`http://localhost:5000/events`);
        if (!eventsResponse.ok) {
          throw new Error('Failed to fetch events');
        }
        const eventsData = await eventsResponse.json();
        const filteredEvents = eventsData.filter(event => event.vendor === data.fullName);
        setFilteredEvents(filteredEvents);
      } catch (error) {
        console.error('Error fetching vendor information:', error);
      }
    };

    fetchVendorInfo();
  }, [vendorId]); // Re-fetch data when vendorId changes

  return (
    <div className="container-vendor">
      {vendorInfo ? (
        <div className="host">
          <img src={image} alt={vendorInfo.fullName} className="profile" />
          <h2>{vendorInfo.fullName}</h2>
          <p className="specialization">{vendorInfo.specialties}</p>
          <p>{vendorInfo.bio}</p>
          <p>
            <span className="rate">{vendorInfo.rate}</span> per event
          </p>
          <a href={`mailto:${vendorInfo.email}`} className="contact-button">
            Click here to contact
          </a>

          <div className="events">
            <h3>Events Hosted by {vendorInfo.fullName}</h3>
            {filteredEvents.map((event) => (
              <div className="event" key={event.id}>
                <div>
                  <img src={celebration} alt={`Event by ${vendorInfo.fullName}`} />
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

export default VendorProfile;
