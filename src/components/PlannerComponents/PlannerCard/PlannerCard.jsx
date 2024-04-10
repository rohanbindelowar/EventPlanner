import React from "react";
import "./styles.css";
import image from "../../../images/png/myImage.jpg";
import { NavLink } from "react-router-dom";

export const PlannerCard = () => {
  return (
    <div>
      <section class="event-cards">
        <div class="container_card">
          <NavLink to="/EventPlanner/plannerProfile/" className="planner-card">
            <div>
              <img src={image} alt="" className="profile" />
            </div>
            <div className="details">
              <h3>Rohan Bin </h3>
              <p>Top Planner</p>
              <p> Event Planner for 100+ years!</p>
            </div>
          </NavLink>
          <NavLink to="/EventPlanner/plannerProfile/" className="planner-card">
            <div>
              <img src={image} alt="" className="profile" />
            </div>
            <div className="details">
              <h3>Rohan Bin </h3>
              <p>Top Planner</p>
              <p> Event Planner for 100+ years!</p>
            </div>
          </NavLink>
          <NavLink to="/EventPlanner/plannerProfile/" className="planner-card">
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
export default PlannerCard;
