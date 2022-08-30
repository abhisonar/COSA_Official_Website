import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.scss";
import Navbar from "./components/Navbar";
import Events from "./pages/Events";
import GoverningBody from "./pages/GoverningBody";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/governing-body" element={<GoverningBody />} />
      </Routes>
    </Router>
  );
};

export default App;
