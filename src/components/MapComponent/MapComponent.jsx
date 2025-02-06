import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import './MapComponent.css';
import L from "leaflet";  

const MapComponent = () => {
  // Initial positions for markers, including Lucknow
  const initialMarkers = [
    { id: 1, position: [28.6139, 77.2090], title: "New Delhi" },  
    { id: 2, position: [26.8467, 80.9462], title: "Lucknow" },    
  ];

  const [markers, setMarkers] = useState(initialMarkers);

  const AddMarkerOnClick = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;

        setMarkers((prevMarkers) => [
          ...prevMarkers,
          { id: prevMarkers.length + 1, position: [lat, lng], title: `Marker ${prevMarkers.length + 1}` },
        ]);
      },
    });
    return null;
  };

  return (
    <div className="map-container">
      <MapContainer 
        center={initialMarkers[1].position}  
        zoom={10} 
        scrollWheelZoom={true} 
        className="leaflet-map"
      >
       
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

       
        {markers.map((marker) => (
          <Marker key={marker.id} position={marker.position}>
            <Popup>{marker.title}</Popup>
          </Marker>
        ))}

     
        <AddMarkerOnClick />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
