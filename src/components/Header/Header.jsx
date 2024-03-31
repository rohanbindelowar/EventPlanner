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
              <NavLink to={"/"} >
                <img src={Logo} alt="logo" class="logo" />
              </NavLink>
              <li>
                <NavLink to={"/"} className='navItem'>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/event"} className="navItem">
                  Event
                </NavLink>
              </li>
              <li>
                <NavLink to={"/event-planner"} className="navItem">
                  Event Planner
                </NavLink>
              </li>
              <li>
                <NavLink to={"/about"} className="navItem">
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
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};
export default Header;