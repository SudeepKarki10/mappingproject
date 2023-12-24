import React from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";

const SimpleMap = () => {
  return (
    <MapContainer
      center={[27.700769, 85.30014]}
      zoom={6.4}
      style={{ height: "300px", width: "300px" }}
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={16}
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
    </MapContainer>
  );
};

export default SimpleMap;
