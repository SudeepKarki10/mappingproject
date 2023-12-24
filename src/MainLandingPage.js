import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import "./index.css";
import "./nav.css";
import "./contact.css";
import "./bootstrap.css";

// Import your images
import bgImage from "./images/bg2.jpg";
import service1Image from "./images/service1.jpg";
import service2Image from "./images/service2.jpg";
import services3Image from "./images/services3.jpg";
import welcomeGif from "./images/welcome.gif";

const MainLandingPage = () => {
  // State to manage login status
  return (
    <div>
      {/* Navigation */}

      {/* Hero Section */}
      <div class="container mx-2" id="main-section">
        <div class="row">
          <div class="text-sec col-md-7">
            <h1>
              Welcome to our Community Map Platform
              <img class="welcome-gif" src={welcomeGif} alt="" />
            </h1>
            <p>
              Explore your community like never before with our user-friendly
              map platform. Connect with local stores, schools, and event
              organizers to discover exciting events and exclusive offers. Join
              us in promoting community engagement, transparency, and
              collaboration.
            </p>

            <button>Get Started</button>
          </div>

          <div class="img-sec col-md-5">
            <img src={bgImage} alt="" />
          </div>
        </div>
      </div>

      {/*<!-- New Services Section --> */}
      <div class="container services-section" id="services-section">
        <div class="services-heading row">
          <h1 class="d-flex align-content-center justify-content-center">
            Our Services
          </h1>
        </div>
        <div class="row">
          <div class="service col-md-4">
            <img src={service1Image} alt="ServiceImage" />
            <h2>Dynamic Map integration</h2>
            <p>
              Easily navigate local stores where exiciting offers are valid,
              schools and events on our user-friendly map.
            </p>
          </div>

          <div class="service col-md-3">
            <img src={service2Image} alt="Service2Image" />
            <h2>Event and Offer Management</h2>
            <p>
              Effortlessly showcase the latest events and offers from local
              bussinesses and event organizers.
            </p>
          </div>

          <div class="service col-md-4">
            <img src={services3Image} alt="Service3Image" />
            <h2>Community Engagement</h2>
            <p>
              Stay connected with your neighbouring community and fostering a
              strong community spirits.
            </p>
          </div>
        </div>
      </div>
      {/*<!-- End of Services Section --> */}

      {/* Contact Section */}
      <div className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 contact-content">
              {/* Your existing contact section code here */}
              <h1>Discover and Engage</h1>
              <p>Explore local events and offerings on Map.It</p>

              <p>
                Meet 'Map.It' - a revolutionary platform designed to foster
                community engagement in local events and empower local
                bussiness.
              </p>
              <button class="contact-button">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLandingPage;
