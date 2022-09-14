import React from "react";
import "./EventInd.scss";
import { useParams } from "react-router-dom";
import { EventData } from "./EventData";
const EventInd = () => {
  const params = useParams();
  console.log(params.slug);
  const getEventFromSlug = (e, i) => {
    return e.event_slug == params.slug;
  };
  const event = EventData.filter(getEventFromSlug);
  const {
    event_img,
    event_slug,
    event_poster,
    event_title,
    event_date,
    event_desc,
    event_objective,
  } = event[0];
  const event_formated_date = new Date(event_date);
  const month = event_formated_date.toLocaleString("default", {
    month: "short",
  });
  return (
    <section id="event">
      <div className="event_hero">
        <div className="event_thumbnail">
          <img src={event_poster == "" ? event_img : event_poster} alt="" />
        </div>
        <div className="event_thumbnail_content">
          <h2 className="event_title">{event_title}</h2>
          <p>{`${event_formated_date.getDate()} ${month} ${event_formated_date.getFullYear()} `}</p>
        </div>
      </div>
    </section>
  );
};

export default EventInd;
