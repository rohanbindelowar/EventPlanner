import React from "react";
import image from "../../images/png/logo.png";
import "./styles.css";
import { NavLink } from "react-router-dom";
export const InvitationCard = () => {
  return (
    <div>
      <section class="invitation-cards">
        <div class="invitation-card">
          <NavLink to="/EventPlanner/invitation-view/wedding" className="card-list">
            <div>
            <img src={image} alt="" className="profile" />
            </div>
            <div className="details">
              <h3>Khalid's Wedding </h3>
              <p>location:Grand Hotel</p>
              <p>Date:2024-04-09</p>
              <p>invitation Id: 661b1681377b667346b5bb61</p>
            </div>
          </NavLink>
        </div>
        <div class="invitation-card">
          <NavLink to="/EventPlanner/invitation-view/graduation" className="card-list">
            <div>
            <img src={image} alt="" className="profile" />
            </div>
            <div className="details">
              <h3>Graduation Ceremony</h3>
              <p>location: University Campus</p>
              <p>Date: 2024-05-31</p>
              <p>invitation Id: 661b17aa377b667346b5bb97</p>
            </div>
          </NavLink>
        </div>
        <div class="invitation-card">
          <NavLink to="/EventPlanner/invitation-view/birthday" className="card-list">
            <div>
            <img src={image} alt="" className="profile" />
            </div>
            <div className="details">
              <h3>Michael's Birthday Bash </h3>
              <p>location: Private Estate</p>
              <p>Date: 2024-04-24</p>
              <p>invitation Id: 661b178f377b667346b5bb91 </p>
            </div>
          </NavLink>
        </div>

      </section>
    </div>
  );
};
