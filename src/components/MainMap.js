import React, { useEffect, useState } from "react";
import maplibregl from "maplibre-gl";

import bgImage from "../images/bg2.jpg";

const MainMap = () => {
  const [map, setMap] = useState(null);
  const [updateFlag, setUpdateFlag] = useState(false);
  const [currentMarkers, setCurrentMarkers] = useState([]);
  const [param, setParam] = useState("default");
  const [mapInstance, setMapInstance] = useState(null); // Add mapInstance state

  const fetchDataAndUpdateMap = async (mapInstance, param) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/events/?EventType=${param}`
      );
      if (response.ok) {
        const data = await response.json();

        clearMarkers();

        const newMarkers = addMarkers(mapInstance, data);

        setCurrentMarkers(newMarkers);

        setUpdateFlag((prevFlag) => !prevFlag);
      } else {
        console.error(
          `Failed to fetch data for param ${param}`,
          response.statusText
        );
      }
    } catch (error) {
      console.error(`Error during request for param ${param}`, error.message);
    }
  };

  const clearMarkers = () => {
    currentMarkers.forEach((marker) => {
      marker.remove();
    });
  };

  const addMarkers = (mapInstance, data) => {
    const newMarkers = [];
    data.forEach((location) => {
      const { latitude, longitude, title, description } = location;

      const marker = new maplibregl.Marker()
        .setLngLat([longitude, latitude])
        .addTo(mapInstance);

      marker.setPopup(
        new maplibregl.Popup().setHTML(
          `<img class="popup-img" src="${bgImage}" alt="Background Image" style={"width : 100%"},{"height : 50px"} /> <br><strong>${title}</strong> <br>${description}`
        )
      );

      newMarkers.push(marker);
    });

    return newMarkers;
  };

  const handleButtonClick = async (newParam) => {
    clearMarkers();
    setParam(newParam);
    fetchDataAndUpdateMap(mapInstance, newParam);
  };

  useEffect(() => {
    const kathmanduCoordinates = [85.324, 27.7172];

    const initializeMap = () => {
      const mapInstance = new maplibregl.Map({
        container: "map",
        style:
          "https://api.maptiler.com/maps/streets/style.json?key=kjUfkSJG5zXEBwiwIWp8",
        center: kathmanduCoordinates,
        zoom: 11.15,
      });

      setMap(mapInstance);
      setMapInstance(mapInstance); // Set mapInstance in the state

      mapInstance.on("load", () => {
        mapInstance.loadImage(
          "https://maplibre.org/maplibre-gl-js/docs/assets/custom_marker.png",
          (error, image) => {
            if (error) throw error;
            mapInstance.addImage("custom-marker", image);

            fetch("http://127.0.0.1:8000/api/events/")
              .then((response) => response.json())
              .then((data) => {
                const newMarkers = addMarkers(mapInstance, data);
                setCurrentMarkers(newMarkers);
              })
              .catch((error) =>
                console.error("Error fetching location data:", error)
              );
          }
        );
      });

      return () => {
        mapInstance.remove();
      };
    };

    initializeMap();
  }, [updateFlag, param]);

  const fetchEventData = async (eventType) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/events/?EventType=${eventType}`
      );
      if (response.ok) {
        const data = await response.json();

        // Clear markers for the current event type
        clearMarkers();

        // Add markers for the new data
        const newMarkers = addMarkers(mapInstance, data);
        setCurrentMarkers(newMarkers);
      } else {
        console.error(
          `Failed to fetch data for event type ${eventType}`,
          response.statusText
        );
      }
    } catch (error) {
      console.error(
        `Error during request for event type ${eventType}`,
        error.message
      );
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <div className="btn-container ">
              <h3>Select Category</h3>
              <button onClick={() => fetchEventData("social")}>Social</button>
              <button onClick={() => fetchEventData("educational")}>
                Educational
              </button>
              <button onClick={() => fetchEventData("hackathon")}>
                Hackathon
              </button>
              <button onClick={() => fetchEventData("offer")}>Offer</button>
              <button onClick={() => fetchEventData("other")}>Other</button>
            </div>
          </div>

          <div className="col-9" id="map-container">
            <div id="map" style={{ height: "100vh" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMap;
