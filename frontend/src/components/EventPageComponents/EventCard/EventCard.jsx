import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";

export const EventCard = () => {
  return (
    <div>
      <section class="event-cards">
        <div class="container_card">
          <NavLink to='/EventPlanner/birthday-eventlist' className="event-card">
            <h3>Birthday</h3>
          </NavLink>
          <NavLink  to='/EventPlanner/wedding-eventlist' className="event-card">
            <h3>Wedding</h3>
          </NavLink>
          <NavLink  to='/EventPlanner/graduation-eventlist' className="event-card">
            <h3>Graduation</h3>
          </NavLink>
          
          <NavLink  to='/EventPlanner/anniversary-eventlist' className="event-card">
            <h3>Anniversary</h3>
          </NavLink>
          <NavLink  to='/EventPlanner/christmas-eventlist' className="event-card">
            <h3>Christmas</h3>
          </NavLink>
          <NavLink  to='/EventPlanner/newyear-eventlist' className="event-card">
            <h3>New Year</h3>
          </NavLink>
          <NavLink  to='/EventPlanner/superbowl-eventlist' className="event-card">
            <h3>Super Bowl</h3>
          </NavLink>
          <NavLink  to='/EventPlanner/other-eventlist' className="event-card">
            <h3>Other Celebration</h3>
          </NavLink>
        </div>
      </section>
    </div>
  );
};
export default EventCard;
