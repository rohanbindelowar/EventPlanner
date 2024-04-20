import React from "react";
import image from "../../../images/png/logo.png";
import "./styles.css";
import { NavLink } from "react-router-dom";

export const BirthDayInvitationView = () => {
  return (
    <div className="inviteBody">
      <div class="background">
        
        <NavLink to={"/EventPlanner/event-profile/661b178f377b667346b5bb91"} className="inviteCard">
          <div>
            <img src={image} alt="" className="invite-profile" />
          </div>
          <div>
            <h2>Michael's Birthday Bash</h2>
            <div className="invite-details">
              <p>Location: Private Estate</p>
              <p>Date: 2024-04-24</p>
            </div>
            <p>Invitation Id: 661951bb0351494a0fbdf87d</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
