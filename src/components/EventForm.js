// EventForm.js
import React, { useState } from "react";
import MapComponent from "./MapComponent";

const EventForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    event_datetime: "",
    latitude: "",
    longitude: "",
    event_type: "other", // Default value
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLocationSelect = (location) => {
    setFormData({
      ...formData,
      latitude: location.lat.toFixed(6),
      longitude: location.lng.toFixed(6),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/events/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Data successfully sent to the backend");
        // TODO: Add any further actions after successful submission
      } else {
        console.log(formData);
        console.error("Failed to send data to the backend");
        // TODO: Handle errors appropriately
      }
    } catch (error) {
      console.error("Error:", error);
      // TODO: Handle errors appropriately
    }
  };

  return (
    <div className="container" id="main-container">
      <header className="header">
        <h1 id="title" className="text-center">
          Advertise your event Now
        </h1>
      </header>

      <form id="survey-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className="form-control"
            placeholder="Enter your title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description about event:</label>
          <textarea
            id="description"
            className="input-textarea"
            name="description"
            placeholder="Enter your description here..."
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="event_datetime">Date:</label>
          <input
            id="event_datetime"
            className="date"
            name="event_datetime"
            type="date"
            placeholder="Enter your date here..."
            value={formData.event_datetime}
            onChange={handleInputChange}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="latitude">Latitude:</label>
          <input
            type="text"
            id="latitude"
            name="latitude"
            value={formData.latitude}
            readOnly
          />

          <label htmlFor="longitude">Longitude:</label>
          <input
            type="text"
            id="longitude"
            name="longitude"
            value={formData.longitude}
            readOnly
          />
        </div>

        <div className="form-group">
          <label htmlFor="event_type">Select event type:</label>
          <select
            name="eventType"
            id="eventType"
            value={formData.event_type}
            onChange={handleInputChange}
          >
            <option value="All">All</option>
            <option value="Social-Event">Social Event</option>
            <option value="Educational-Event">Educational Event</option>
            <option value="Hackathon">Hackathon</option>
            <option value="Offer">Offer</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div
          className="form-group"
          id="map-conatiner"
          style={{ width: "400px", height: "300px" }}
        >
          <p>Select the required location :</p>
          <MapComponent onLocationSelect={handleLocationSelect} />
        </div>

        <button type="submit" id="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EventForm;
