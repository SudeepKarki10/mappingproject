import React, { useEffect, useState } from "react";
import maplibregl from "maplibre-gl";

import bgImage from "../images/bg2.jpg";

const Social = () => {
  const [map, setMap] = useState(null);
  const [updateFlag, setUpdateFlag] = useState(false);
  const [currentMarkers, setCurrentMarkers] = useState([]);
  const [param, setParam] = useState("social"); // Default parameter

  const fetchDataAndUpdateMap = async (mapInstance, param) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/events/?EventType=social`
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
    fetchDataAndUpdateMap(map, newParam);
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

  return (
    <div>
      <div className="btn-container">
        <button onClick={() => fetchDataAndUpdateMap(map, "social")}>
          Social
        </button>
        <button onClick={() => handleButtonClick("educational")}>
          Educational
        </button>
        <button onClick={() => handleButtonClick("hackathon")}>
          Hackathon
        </button>
        <button onClick={() => handleButtonClick("offer")}>Offer</button>
        <button onClick={() => handleButtonClick("other")}>Other</button>
      </div>
      <div id="map" style={{ height: "100vh" }}></div>
    </div>
  );
};

export default Social;
