// Contact.js

import React from "react";
import "../contact.css"; // Import your contact-specific CSS file here

const Contact = () => {
  return (
    <div>
      <div class="contact-section">
        <div class="container">
          <div class="row">
            <div class="col-md-6 contact-content">
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

      <h1 class="section-header">Contact Us</h1>

      <div class="contact-wrapper">
        <form id="contact-form" class="form-horizontal">
          <div class="form-group">
            <div class="col-sm-12">
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="NAME"
                name="name"
                value=""
                required
              />
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-12">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="EMAIL"
                name="email"
                value=""
                required
              />
            </div>
          </div>

          <textarea
            class="form-control"
            rows="10"
            placeholder="MESSAGE"
            name="message"
            required
          ></textarea>

          <button
            class="btn btn-primary send-button"
            id="submit"
            type="submit"
            value="SEND"
          >
            <div class="alt-send-button">
              <i class="fa fa-paper-plane"></i>
              <span class="send-text">SEND</span>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
