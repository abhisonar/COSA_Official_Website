import React from "react";
import "./Navbar.scss";
import cosa_logo from "../../images/cosa_logo.png";
import engg_logo from "../../images/engg_logo.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <section id="navbar">
      <div className="brand">
        <div className="brand_logo">
          <img src={cosa_logo} alt="" />
        </div>
        <div className="brand_logo">
          <img src={engg_logo} alt="" />
        </div>
      </div>
      <ul className="nav_list">
        <li>
          <NavLink to="/" className="nav_link">
            Home
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
