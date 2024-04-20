import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./styles.css";
import Logo from "../../images/png/logo.png";
import SearchAutocomplete from "../Search";

export const Header = () => {
  // const [searchQuery, setSearchQuery] = useState("");
  //const history = useHistory();

  // Header.jsx

  // const handleSearchSubmit = async (event) => {
  //   event.preventDefault();
  //   if (searchQuery.trim() !== "") {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:5000/events/search?query=${encodeURIComponent(
  //           searchQuery
  //         )}`
  //       );
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch search results");
  //       }
  //       const data = await response.json();
  //       console.log(data); // Handle the search results
  //     } catch (error) {
  //       console.error("Error searching events:", error);
  //     }
  //   }
  // };

  // const handleSearchChange = (event) => {
  //   setSearchQuery(event.target.value);
  // };

  // const handleKeyPress = (event) => {
  //   if (event.key === "Enter") {
  //     handleSearchSubmit(event);
  //   }
  // };

  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to={"EventPlanner/"}>
                  <img src={Logo} alt="Event Planner Logo" className="logo" />
                </NavLink>
              </li>
              <li>
                <NavLink to={"EventPlanner/"} className="navItem">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/EventPlanner/event"} className="navItem">
                  Event
                </NavLink>
              </li>
              <li>
                <NavLink to={"EventPlanner/event-planner"} className="navItem">
                  Event Planner
                </NavLink>
              </li>
              <li>
                <NavLink to={"EventPlanner/vendor"} className="navItem">
                  Vendor
                </NavLink>
              </li>
              <li>
                <NavLink to={"EventPlanner/about"} className="navItem">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to={"EventPlanner/invitation"} className="navItem">
                  Invitation
                </NavLink>
              </li>
              <li>
                
                <SearchAutocomplete/>
                
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
