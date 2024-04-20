import React, { useState, useEffect } from 'react';
import "./styles.css"

const SearchAutocomplete = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events data
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5000/events');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    
    fetchEvents();
  }, []);
    console.log(events);
    useEffect(() => {
        // Filter events based on search term
        if (searchTerm.trim() !== '') {
          const filtered = events?.filter(
            (event) =>
              event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              event.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
              event.eventPlanner.toLowerCase().includes(searchTerm.toLowerCase()) ||
              event.vendor.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setFilteredEvents(filtered || []);
        } else {
          setFilteredEvents([]);
        }
      }, [searchTerm, events]);
      

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input className="search-autocomplete-container "
        type="text"
        placeholder="Search events..."
        value={searchTerm}
        onChange={handleChange}
      />
    {filteredEvents.length > 0 && (
  <ul className='drop-down'>
    {filteredEvents.map((event) => (
      
        <a href={`/EventPlanner/event-profile/${event._id}`} className="event-link">
            <li className="event-items" key={event._id}>
          {event.name}
          </li>
        </a>
      
    ))}
  </ul>
)}


    </div>
  );
};

export default SearchAutocomplete;
