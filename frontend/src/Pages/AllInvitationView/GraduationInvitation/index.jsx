import React from "react";
import image from "../../../images/png/logo.png";
import "./styles.css";
import { NavLink } from "react-router-dom";

export const GraduationInvitationView = () => {
  return (
    <div className="inviteBody">
      <div class="background">
        <NavLink
          to={"/EventPlanner/event-profile/661b17aa377b667346b5bb97"}
          className="inviteCard"
        >
          <div>
            <img src={image} alt="" className="invite-profile" />
          </div>
          <div>
            <h2>Jessica's Graduation Party</h2>
            <div className="invite-details">
              <p>Location: University Campus</p>
              <p>Date: 2024-05-31</p>
            </div>
            <p>Invitation Id: 661b17aa377b667346b5bb97</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
