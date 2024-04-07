import React from "react";
import "./styles.css";
import image from "../../../images/png/logo-white.png";

export const VendorCard = () => {
  return (
    <div>
      <section class="vendor-cards">
        <div class="container_card">
          <div class="vendor-card">
            <img src={image} alt="" className="profile" />
            <div className="details">
              <h3>Rohan Bin </h3>
              <p>Top Planner</p>
              <p> Event Planner for 100+ years!</p>
            </div>
          </div>
          <div class="vendor-card">
            <img src={image} alt="" className="profile" />
            <div className="details">
              <h3>Rohan Bin </h3>
              <p>Top Planner</p>
              <p> Event Planner for 100+ years!</p>
            </div>
          </div>
          <div class="vendor-card">
            <img src={image} alt="" className="profile" />
            <div className="details">
              <h3>Rohan Bin </h3>
              <p>Top Planner</p>
              <p> Event Planner for 100+ years!</p>
            </div>
          </div>
          <div class="vendor-card">
            <img src={image} alt="" className="profile" />
            <div className="details">
              <h3>Rohan Bin </h3>
              <p>Top Planner</p>
              <p> Event Planner for 100+ years!</p>
            </div>
          </div>
          <div class="vendor-card">
            <img src={image} alt="" className="profile" />
            <div className="details">
              <h3>Rohan Bin </h3>
              <p>Top Planner</p>
              <p> Event Planner for 100+ years!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default VendorCard;
