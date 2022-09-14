import React from "react";
import EventCard from "./EventCard";
import "./index.scss";
import { EventData } from "./EventData";
import { NavLink } from "react-router-dom";
const Events = () => {
  const getDateDifference = (date) => {
    const today_date = new Date();
    const event_date = new Date(date);
    var difference_In_Time = today_date.getTime() - event_date.getTime();
    return difference_In_Time / (1000 * 3600 * 24);
  };
  const getUpcomingEvents = (e) => {
    return getDateDifference(e.event_date) < 0;
  };
  const getPastEvents = (e) => {
    return getDateDifference(e.event_date) > 0;
  };
  const upcoming_eventsData = EventData.filter(getUpcomingEvents);
  console.log(upcoming_eventsData);
  const past_eventsData = EventData.filter(getPastEvents);
  return (
    <div className="events">
      <div className="all_events upcoming_events">
        <div className="events_title">
          <h2>Upcoming Events</h2>
          <NavLink to="/events/upcoming-events">See more</NavLink>
        </div>
        <div className="events_cards">
          {upcoming_eventsData != null ? (
            upcoming_eventsData.map((e) => (
              <EventCard
                img={e.event_img}
                poster={e.event_poster}
                title={e.event_title}
                slug={e.event_slug}
                objective={e.event_objective}
                date={e.event_date}
                desc={e.event_desc}
              />
            ))
          ) : (
            <div className="no_events">
              <h3>Will be there soon.......</h3>
            </div>
          )}
        </div>
      </div>
      <div className=" all_events past_event">
        {upcoming_eventsData ? (
          <>
            <div className="events_title">
              <h2>Past Events</h2>
              <NavLink to="/events/past-events">See more</NavLink>
            </div>
            <div className="events_cards">
              {past_eventsData.slice(0, 3).map((e, index) => (
                <EventCard
                  key={index}
                  img={e.event_img}
                  poster={e.event_poster}
                  title={e.event_title}
                  slug={e.event_slug}
                  objective={e.event_objective}
                  date={e.event_date}
                  desc={e.event_desc}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Events;
