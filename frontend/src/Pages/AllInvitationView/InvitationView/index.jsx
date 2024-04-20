import React from "react";
import image from "../../../images/png/logo.png";
import "./styles.css";
import { NavLink } from "react-router-dom";

export const InvitationView = () => {
  return (
    <div className="inviteBody">
      <div class="background">
      <NavLink
          to={"/EventPlanner/event-profile/661b1681377b667346b5bb61"}
          className="inviteCard"
        >
          <div>
            <img src={image} alt="" className="invite-profile" />
          </div>
          <div>
            <h2>Khalid's Wedding </h2>
            <div className="invite-details">
              <p>Location: Grand Hotel</p>
              <p>Date:  2024-04-09</p>
            </div>
            <p>Invitation Id: 661b1681377b667346b5bb61</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
