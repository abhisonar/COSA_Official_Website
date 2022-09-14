import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.scss";
import Navbar from "./components/Navbar";
import Events from "./pages/Events";
import GoverningBody from "./pages/GoverningBody";
import Home from "./pages/Home";
import PastEvents from "./pages/Events/PastEvents";
import UpcomingEvents from "./pages/Events/UpcomingEvents";

import AOS from "aos";
import EventInd from "./pages/Events/EventInd";
import Store from "./pages/Store";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/governing-body" element={<GoverningBody />} />
        <Route path="/cosa-store" element={<Store />} />
        <Route path="/event/:slug" element={<EventInd />} />
        <Route path="/events/past-events" element={<PastEvents />} />
        <Route path="/events/upcoming-events" element={<UpcomingEvents />} />
      </Routes>
      <Footer />
    </Router>
  );
};
AOS.init();
export default App;
