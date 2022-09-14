// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Event.scss";
import React, { useState } from "react";
import Slider from "react-slick";
import { EventData } from "../Events/EventData";
import HeroImg from "../../images/hero_svg.png";
import { useTypewriter } from "react-simple-typewriter";

const Event = () => {
  const [eventSlideIndex, setEventSlideIndex] = useState(0);
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <i className={`fa-solid fa-angle-left`}></i>
      </div>
    );
  };
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <i className={`fa-solid fa-angle-right`}></i>
      </div>
    );
  };
  var settings = {
    infinite: true,
    speed: 500,
    fade: true,
    // autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    focusOnSelect: true,
    beforeChange: (current, next) => setEventSlideIndex(next),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <section id="event">
      <Slider {...settings}>
        {EventData.map((h, index) => (
          <div className="event_slide" key={index}>
            <div className="event_img">
              <img src={h.event_img} alt="" />
            </div>
            <div className="event_content">
              <h2>{h.event_title}</h2>
              <p>{h.event_desc.substring(0, 100)}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};
export default Event;
