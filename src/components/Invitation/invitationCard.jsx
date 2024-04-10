import React from "react";
import image from "../../images/png/logo.png";
import "./styles.css";
import { NavLink } from "react-router-dom";
export const InvitationCard = () => {
  return (
    <div>
      <section class="invitation-cards">
        <div class="invitation-card">
          <NavLink to="/EventPlanner/invitation-view/" class="card-list">
            <div>
            <img src={image} alt="" className="profile" />
            </div>
            <div className="details">
              <h3>Wedding Party </h3>
              <p>location: ...........</p>
              <p>Date: ../../....</p>
              <p>invitation Id: ...................</p>
            </div>
          </NavLink>
        </div>

      </section>
    </div>
  );
};
