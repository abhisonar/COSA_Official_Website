import React from "react";
import "./index.scss";

import COSA from "../../images/cosa_logo.png";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const curr_year = new Date().getFullYear();
  return (
    <section id="footer">
      <div className="footer_top">
        <div className="footer_brand">
          <div className="footer_brand_img">
            <img src={COSA} alt="" />
          </div>
          <p>Guru Gobind Singh College of Engineering &amp; Research Centre</p>
          <h3>Computer Engineering Students' Association</h3>
        </div>
        <div className="footer_seperator"></div>
        <div className="footer_links">
          <NavLink to="/events">Events</NavLink>
          <NavLink to="governing-body">Members</NavLink>
          <NavLink to="/cosa-store">Store</NavLink>
        </div>
        <div className="footer_seperator"></div>

        <div className="footer_social">
          <p>Follow us on:</p>
          <div className="footer_social_links">
            <NavLink to="/">
              <i class="fa-brands fa-facebook-f"></i>
            </NavLink>
            <NavLink to="/">
              <i class="fa-brands fa-instagram"></i>
            </NavLink>
            <NavLink to="/">
              <i class="fa-brands fa-youtube"></i>
            </NavLink>
            <NavLink to="/">
              <i class="fa-brands fa-linkedin-in"></i>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <p>
          Copyright © {curr_year} Guru Gobind Singh Engg. College. All Rights
          Reserved.
        </p>
        {/* <p>
          Developed by <a href="#">Abhishek Sonar</a> &amp;{" "}
          <a href="#">Sakshi Parkhe</a>
        </p> */}
      </div>
    </section>
  );
};

export default Footer;
