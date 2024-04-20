import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import "./styles.css";
import Logo from "../../images/png/logo.png";

export const BeforeLoginHeader = () => {
  const [searchQuery, setSearchQuery] = useState("");
 

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    <NavLink to={"EventPlanner/signup"}></NavLink>;
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearchSubmit(event);
    }
  };

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
                <form onSubmit={handleSearchSubmit} className="search-form">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onKeyDown={handleKeyPress}
                    placeholder="Search Events..."
                    className="search"
                  />
                </form>
              </li>
              <li>
                {" "}
                <NavLink to={"EventPlanner/signup"} className="signIn-btn">
                  SignIn / SignUp
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default BeforeLoginHeader;
