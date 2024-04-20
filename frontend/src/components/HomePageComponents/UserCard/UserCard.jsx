import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";

export const UserCard = () => {
  return (
    <div>
      <section class="user-cards">
        <div class="container_card">
          <NavLink to={"/EventPlanner/hosting-event"} className="user-card">
            <div class="">
              <h3>Host an Event</h3>
              <p>Get Free Estimation!</p>
              <p>Choose High quality Event Planner!</p>
            </div>
          </NavLink>
          <NavLink to={"/EventPlanner/become-eventplanner"} className="user-card">
            <div>
              <h3>Join As an Event Planner</h3>
              <p>Secure Payment System</p>
              <p>Get 30% more Appointments!</p>
            </div>
          </NavLink>

          <NavLink to={"/EventPlanner/be-vendor/"} className="user-card">
            <div >
              <h3>Join As a Vendor</h3>
              <p>Secure Payment System</p>
              <p>Get 20% more Bookings </p>
            </div>
          </NavLink>
        </div>
      </section>
    </div>
  );
};
export default UserCard;
