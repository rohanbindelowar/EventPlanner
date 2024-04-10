import React from "react";
import "./styles.css";
import image from "../../images/png/logo.png";
import celebration from "../../images/png/celebration.png";

export const VendorProfile = () => {
  return (
    <div className="container-planner">
      <div className="host">
        <img src={image} alt="Emily Thompson" className="profile" />
        <h2>Emily Thompson</h2>
        <p class="specialization">
          Specializes in weddings and corporate events
        </p>
        <p>
          With over 10 years of experience, Emily brings creativity and
          attention to detail to every event she plans.
        </p>
        <p>
          <span class="rate">$1500 - $5000</span> per event
        </p>
        <a href="mailto:emily@example.com" class="contact-button">
          Click here to contact
        </a>

        <div class="events">
          <h3>Events Hosted by Emily</h3>
          <div class="event">
            <div>
              {" "}
              <img src={celebration} alt="Event 1 by Emily" />
            </div>
            <div>
              <h4>Wedding Celebration</h4>
              <p>
                Wedding ceremony celebrations started as a tradition to
                “receive” friends and family for the first time as a newlywed
                couple.
              </p>
              <p>Date: January 25, 2017</p>
              <p>Location: Toronto,Canada</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
