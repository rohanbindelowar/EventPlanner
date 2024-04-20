import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";
import image from "../../../images/png/logo.png"

const PlannerCard = ({ planner }) => {
  return (
    <div className="planner-container_card">
     <div className="planner-cards">
     <NavLink to={`/EventPlanner/planner-profile/${planner._id}`} className="planner-card">
        <div>
          <img src={image} alt="" className="profile" />
        </div>
        <div className="details">
          <h3>{planner.fullName}</h3>
          <p>{planner.companyName}</p>
          <p>{planner.yearsOfExperience} years of experience</p>
        </div>
      </NavLink>
     </div>
    </div>
  );
};

const PlannerCardList = () => {
  const [eventPlanners, setEventPlanners] = useState([]);

  useEffect(() => {
    fetchEventPlanners();
  }, []);

  const fetchEventPlanners = async () => {
    try {
      const response = await fetch("http://localhost:5000/eventPlanners");
      if (!response.ok) {
        throw new Error("Failed to fetch event planners");
      }
      const data = await response.json();
      setEventPlanners(data);
    } catch (error) {
      console.error("Error fetching event planners:", error);
    }
  };

  return (
    <div>
      <section className="planner-cards">
        {eventPlanners.map((planner) => (
          <PlannerCard key={planner._id} planner={planner} />
        ))}
      </section>
    </div>
  );
};

export default PlannerCardList;
