import React, { useState } from "react";
import "./Navbar.scss";
import cosa_logo from "../../images/cosa_logo.png";
import engg_logo from "../../images/engg_logo.png";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => {
    setClick(false);
  };
  const mobielView = useMediaQuery({
    query: "(max-width:500px)",
  });
  return (
    <section id="navbar">
      <div className="brand engg_logo">
        <div className="brand_logo">
          <NavLink to="/">
            <img src={engg_logo} alt="" />
          </NavLink>
        </div>
      </div>
      <div className="brand">
        <div className="brand_logo">
          <NavLink to="/">
            <img src={cosa_logo} alt="" />
          </NavLink>
        </div>
        {!mobielView ? (
          <div className="brand_title">
            <h2 className="brand_name">
              Computer Engineering Students' Association
            </h2>
            <p>
              Guru Gobind Singh College of Engineering and Research Center,
              Nashik
            </p>
          </div>
        ) : null}
      </div>
      <div
        className={`menu-bar ${click ? "active" : ""}`}
        onClick={() => setClick(!click)}
      >
        <i
          className={`${
            click ? "fa-solid fa-close" : "fa-solid fa-bars-staggered"
          }`}
        ></i>
      </div>
      <ul className={`nav_list ${click ? "active" : ""}`}>
        <li>
          <NavLink to="/" className="nav_link" onClick={closeMobileMenu}>
            <i className="fa-solid fa-house"></i>Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" className="nav_link" onClick={closeMobileMenu}>
            <i className="fa-solid fa-calendar-days"></i>Events
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/governing-body"
            className="nav_link"
            onClick={closeMobileMenu}
          >
            <i className="fa-solid fa-user-group"></i>Members
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cosa-store"
            className="nav_link"
            onClick={closeMobileMenu}
          >
            <i class="fa-solid fa-shirt"></i> Store
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
