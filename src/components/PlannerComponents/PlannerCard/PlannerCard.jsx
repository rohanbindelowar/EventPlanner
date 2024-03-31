import React from "react";
import "./styles.css";
import image from "../../../images/png/myImage.jpg";

export const PlannerCard = () => {
  return (
    <div>
      <section class="event-cards">
        <div class="container_card">
          <div class="planner-card">
            <img src={image} alt="" className="profile" />
            <div className="details">
              <h3>Rohan Bin </h3>
              <p>Top Planner</p>
              <p> Event Planner for 100+ years!</p>
            </div>
          </div>
          <div class="planner-card">
            <img src={image} alt="" className="profile" />
            <div className="details">
              <h3>Rohan Bin </h3>
              <p>Top Planner</p>
              <p> Event Planner for 100+ years!</p>
            </div>
          </div>
          <div class="planner-card">
            <img src={image} alt="" className="profile" />
            <div className="details">
              <h3>Rohan Bin </h3>
              <p>Top Planner</p>
              <p> Event Planner for 100+ years!</p>
            </div>
          </div>
          <div class="planner-card">
            <img src={image} alt="" className="profile" />
            <div className="details">
              <h3>Rohan Bin </h3>
              <p>Top Planner</p>
              <p> Event Planner for 100+ years!</p>
            </div>
          </div>
          <div class="planner-card">
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
export default PlannerCard;
