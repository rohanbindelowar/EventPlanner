import React from "react";
import "./styles.css";
import image from "../../../images/png/logo-white.png";
import { NavLink } from "react-router-dom";
export const VendorCard = () => {
  return (
    <div>
      <section class="vendor-cards">
        <div class="container_card">
          <NavLink to="/EventPlanner/vendor-profile/" className="vendor-card">
            <div>
              <img src={image} alt="" className="profile" />
            </div>
            <div className="details">
              <h3>Rohan Bin </h3>
              <p>Top Planner</p>
              <p> Event Planner for 100+ years!</p>
            </div>
          </NavLink>
          <NavLink to="/EventPlanner/vendor-profile/" className="vendor-card">
            <div>
              <img src={image} alt="" className="profile" />
            </div>
            <div className="details">
              <h3>Rohan Bin </h3>
              <p>Top Planner</p>
              <p> Event Planner for 100+ years!</p>
            </div>
          </NavLink>
          <NavLink to="/EventPlanner/vendor-profile/" className="vendor-card">
            <div>
              <img src={image} alt="" className="profile" />
            </div>
            <div className="details">
              <h3>Rohan Bin </h3>
              <p>Top Planner</p>
              <p> Event Planner for 100+ years!</p>
            </div>
          </NavLink>
          <NavLink to="/EventPlanner/vendor-profile/" className="vendor-card">
            <div>
              <img src={image} alt="" className="profile" />
            </div>
            <div className="details">
              <h3>Rohan Bin </h3>
              <p>Top Planner</p>
              <p> Event Planner for 100+ years!</p>
            </div>
          </NavLink>
          
        </div>
      </section>
    </div>
  );
};
export default VendorCard;
