import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.scss";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import GoverningBody from "./pages/GoverningBody";
import Home from "./pages/Home";

import AOS from "aos";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/governing-body" element={<GoverningBody />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};
AOS.init();
export default App;
