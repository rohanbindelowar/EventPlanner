import React from "react";
import '../Information/information.css'


export const Information = () => {
  return (
    <div className="container-about">
      <div id="contact-info">
        <h2>Contact Information</h2>
        <p>Email: GEtTOknowus@gmail.com</p>
        <p>Phone: 463-346-7890</p>
      </div>

      <div id="social-media">
        <h2>Connect With Us</h2>
        <p>Follow us on social media:</p>
        <ul>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
        </ul>
      </div>

      <div id="map">
        <h2>Visit Us</h2>
        <p>Find us on the map:</p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d144662.2683506739!2d-79.5613231310427!3d43.65322534722067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d63c7e3c09%3A0x3800df661c81cfa8!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sca!4v1648412169635!5m2!1sen!2sca"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};
