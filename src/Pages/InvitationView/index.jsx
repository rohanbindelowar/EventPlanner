import React from "react";
import image from "../../images/png/logo.png";
import "./styles.css";

export const InvitationView = () => {
  return (
    <div className="inviteBody">
      <div class="background">
        <div className="inviteCard">
          <div>
            <img src={image} alt="" className="invite-profile" />
          </div>
          <div>
            <h2>Wedding Party </h2>
            <div className="invite-details">
              <p>location: ...........</p>
              <p>Date: ../../....</p>
            </div>
            <p>invitation Id: ...................</p>
          </div>
        </div>
      </div>
    </div>
  );
};
