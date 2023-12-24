import React, { useState } from "react";
import { Link } from "react-router-dom";
import "index.css";
import "nav.css";
import "./contact.css";
import "./bootstrap.css";

// Import your images
import bgImage from "./bg2.jpg";
import service1Image from "./service1.jpg";
import service2Image from "./service2.jpg";
import services3Image from "./services3.jpg";
import welcomeGif from "./welcome.gif";
import hamIcon from "./ham.png";
import crossIcon from "./cross.jpg";

const MainLandingPage = () => {
  // State to manage login status

  return (
    <div>
      {/* Navigation */}
      <header>
        <div id="header">
          <div class="container">
            <div class="row">
              <div class="col-3 d-flex justify-content-between align-items-center">
                <h1 class="logo">Advert.OnMap</h1>
              </div>
              <div class="col-9 d-flex justify-content-end align-items-center nav-list">
                <ul class="menu list-items">
                  <li class="menuItem">
                    <a href="#main-section">Home</a>
                  </li>
                  <li class="menuItem">
                    <a href="#about-section">About</a>
                  </li>
                  <li class="menuItem">
                    <a href="advertise.html">Advertise</a>
                  </li>
                  <li class="menuItem">
                    <a href="contact.html">Contact</a>
                  </li>
                  <button class="login-btn text-decoration-none p-0">
                    <button className="login-btn text-decoration-none p-0">
                      <Link to="/login" className="text-decoration-none">
                        Login
                      </Link>
                    </button>
                  </button>
                </ul>

                <button class="hamburger">
                  <i class="menuIcon material-icons" id="menuIcon">
                    <img src="ham.png" alt="" />
                  </i>
                  <i class="closeIcon material-icons" id="closeIcon">
                    <img src="cross.jpg" alt="" />
                  </i>
                </button>
              </div>

              {/*<!-- login/signup -->*/}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div class="container mx-2" id="main-section">
        <div class="row">
          <div class="text-sec col-md-7">
            <h1>
              Welcome to our Community Map Platform
              <img class="welcome-gif" src="welcome.gif" alt="" />
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
            <img src="bg2.jpg" alt="" />
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
            <img src="service1.jpg" alt="ServiceImage" />
            <h2>Dynamic Map integration</h2>
            <p>
              Easily navigate local stores where exiciting offers are valid,
              schools and events on our user-friendly map.
            </p>
          </div>

          <div class="service col-md-3">
            <img src="service2.jpg" alt="Service2Image" />
            <h2>Event and Offer Management</h2>
            <p>
              Effortlessly showcase the latest events and offers from local
              bussinesses and event organizers.
            </p>
          </div>

          <div class="service col-md-4">
            <img src="services3.jpg" alt="Service3Image" />
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
