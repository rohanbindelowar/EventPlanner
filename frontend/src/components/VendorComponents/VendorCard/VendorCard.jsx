import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";
import image from "../../../images/png/logo-white.png";

const VendorCard = ({ vendor }) => {
  return (
    <div className="vendor-container_card">
      <div className="vendor-cards">
        <NavLink to={`/EventPlanner/vendor-profile/${vendor._id}`} className="vendor-card">
          <div>
            <img src={image} alt="" className="profile" />
          </div>
          <div className="details">
            <h3>{vendor.fullName}</h3>
            <p>{vendor.specialties}</p>
            <p>{vendor.servicesOffered}</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

const VendorCardList = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    fetchVendors();
  }, []);

  const fetchVendors = async () => {
    try {
      const response = await fetch("http://localhost:5000/vendors");
      if (!response.ok) {
        throw new Error("Failed to fetch vendors");
      }
      const data = await response.json();
      setVendors(data);
    } catch (error) {
      console.error("Error fetching vendors:", error);
    }
  };

  return (
    <div>
      <div className="vendor-container_card">
      <section className="vendor-cards">
        {vendors.map((vendor) => (
          <VendorCard key={vendor._id} vendor={vendor} />
        ))}
      </section>
      </div>
    </div>
  );
};

export default VendorCardList;
