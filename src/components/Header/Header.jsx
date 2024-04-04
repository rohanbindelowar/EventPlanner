import React from "react";
import "./styles.css";
import Logo from "../../images/png/logo.png";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <header>
        <div class="container">
          <nav>
            <ul>
              <NavLink to={"EventPlanner/"} >
                <img src={Logo} alt="logo" class="logo" />
              </NavLink>
              <li>
                <NavLink to={"EventPlanner/"} className='navItem'>Home</NavLink>
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
                <NavLink to={"EventPlanner/about"} className="navItem">
                  About
                </NavLink>
              </li>

              <form action="">
                <input
                  type="text"
                  className="search"
                  placeholder="Search Events..."
                />
              </form>
              
              <NavLink to={"EventPlanner/signup"} className="signIn-btn">
              SignIn / SignUp
              </NavLink>
            
            </ul>

            
          </nav>
        </div>
      </header>
    </div>
  );
};
export default Header;
