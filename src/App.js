// App.js

import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLandingPage from "./MainLandingPage";
import Login from "./components/Login";
import Signup from "./components/Signup"; // Import the Signup component
import Nav from "./components/Nav";
import Form from "./components/EventForm";
import Contact from "./components/Contact";
import EventForm from "./components/EventForm";
import MainMap from "./components/MainMap";
import hamIcon from "./images/ham.png";
import crossIcon from "./images/cross.jpg";
import SimpleMap from "./components/Simplemap";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<MainLandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/form" element={<Form />} />
          <Route path="/mainmap" element={<MainMap />} />
          {/* Ensure this path matches Link in Login */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/eventform" element={<EventForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
