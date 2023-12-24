import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "../advert.css";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);

  const [clickedLocation, setClickedLocation] = useState({
    lng: 83.9754,
    lat: 28.2158,
  });

  const [zoom] = useState(11);

  useEffect(() => {
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      center: [clickedLocation.lng, clickedLocation.lat],
      zoom: zoom,
      pitch: 52,
      hash: true,
      style: {
        version: 8,
        sources: {
          osm: {
            type: "raster",
            tiles: ["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],
            tileSize: 256,
            attribution: "&copy; OpenStreetMap Contributors",
            maxzoom: 19,
          },
          terrainSource: {
            type: "raster-dem",
            tiles: [
              "https://vtc-cdn.maptoolkit.net/terrainrgb/{z}/{x}/{y}.webp",
            ],
            encoding: "mapbox",
            maxzoom: 14,
            minzoom: 4,
          },
        },
        layers: [
          {
            id: "osm",
            type: "raster",
            source: "osm",
          },
        ],
        terrain: {
          source: "terrainSource",
          exaggeration: 0.33,
        },
      },
      maxZoom: 18,
      maxPitch: 85,
    });

    map.current.on("click", (e) => {
      const clickedLngLat = e.lngLat;
      setClickedLocation({ lng: clickedLngLat.lng, lat: clickedLngLat.lat });

      // Clear existing marker (if any)
      if (marker.current) {
        marker.current.remove();
      }

      // Add a marker at the clicked location
      marker.current = new maplibregl.Marker()
        .setLngLat([clickedLngLat.lng, clickedLngLat.lat])
        .addTo(map.current);

      // Log the coordinates
      console.log(
        `Clicked Coordinates: ${clickedLngLat.lng}, ${clickedLngLat.lat}`
      );
    });

    map.current.addControl(
      new maplibregl.NavigationControl({
        visualizePitch: true,
        showZoom: true,
        showCompass: true,
      }),
      "top-right"
    );
    map.current.addControl(
      new maplibregl.TerrainControl({
        source: "terrainSource",
        exaggeration: 0.33,
      })
    );
  }, [clickedLocation.lng, clickedLocation.lat, zoom]);

  return (
    <div className="map-wrap" style={{ width: "400px", height: "400px" }}>
      <div
        ref={mapContainer}
        className="map"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
