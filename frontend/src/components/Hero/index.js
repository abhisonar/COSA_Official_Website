import "./Hero.scss";
import React, { useState } from "react";
import Slider from "react-slick";
import HeroImg from "../../images/hero_svg.png";
import virat from "../../images/team/virat_kohli.png";
import ms from "../../images/team/ms_dhoni.png";
import rohit from "../../images/team/rohit_sharma.png";
import { useTypewriter } from "react-simple-typewriter";
import { ReactComponent as Logo } from "../../images/hero_svg.svg";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";

const Hero = () => {
  const { text } = useTypewriter({
    words: ["Computer Engineers", "Thinkers", "Innovators", ""],
    loop: 0, // Infinit
  });
  const mobileView = useMediaQuery({
    query: "(max-width:450px)",
  });
  return (
    <section id="hero">
      <div className="hero_content">
        <h3>&nbsp;We are</h3>
        <h2 className="typewriter">&nbsp;{text}</h2>
        <NavLink to="/about-us" className="hero_btn">
          Explore Events <i className="fa-solid fa-arrow-right-long"></i>
        </NavLink>
      </div>
      <div className="hero_img">
        {/* {mobileView ? (
          <img src={HeroImg} alt="" />
        ) : (
          <>
            <img
              src={virat}
              alt=""
              className="pos pos1"
              data-aos="fade-down"
              data-aos-duration="2000"
            />
            <img src={ms} alt="" className="pos pos2 left" />
            <img src={rohit} alt="" className="pos pos2 right" />
            <img src={ms} alt="" className="pos pos3 left" />
            <img src={rohit} alt="" className="pos pos3 right" />
            <img src={ms} alt="" className="pos pos4 left" />
            <img src={rohit} alt="" className="pos pos4 right" />
            <img src={ms} alt="" className="pos pos5 left" />
            <img src={rohit} alt="" className="pos pos5 right" />
            <img src={ms} alt="" className="pos pos6 left" />
            <img src={rohit} alt="" className="pos pos6 right" />
            <img src={ms} alt="" className="pos pos7 left" />
            <img src={rohit} alt="" className="pos pos7 right" />
            <img src={ms} alt="" className="pos pos8 left" />
            <img src={rohit} alt="" className="pos pos8 right" />
            <img src={ms} alt="" className="pos pos9 left" />
            <img
              src={rohit}
              alt=""
              className="pos pos9 right"
              data-aos="flip-up"
              data-aos-duration="2000"
            />
          </>
        )} */}
        <img src={HeroImg} alt="" />
      </div>
    </section>
  );
};
export default Hero;
