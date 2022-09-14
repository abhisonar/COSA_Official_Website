import React from "react";
import "./EventCard.scss";
import { NavLink } from "react-router-dom";
const EventCard = ({ img, poster, title, slug, objective, date, desc }) => {
  const formated_date = new Date(date);
  const month = formated_date.toLocaleString("default", { month: "short" });
  return (
    <div className="event_card">
      <div className="event_img">
        <img src={poster === "" ? img : poster} alt="" />
      </div>
      <p className="event_date">{`${formated_date.getDate()} ${month} ${formated_date.getFullYear()}`}</p>
      <h4 className="event_title">{title}</h4>
      <NavLink to={`/event/${slug}`}>Read more</NavLink>
    </div>
  );
};

export default EventCard;
