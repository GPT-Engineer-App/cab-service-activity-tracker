import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Tracking = () => {
  const [position, setPosition] = useState([51.505, -0.09]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setPosition([pos.coords.latitude, pos.coords.longitude]);
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-6">Real-Time Tracking</h1>
      <MapContainer center={position} zoom={13} className="h-96 w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}></Marker>
      </MapContainer>
      <div className="mt-4 space-x-4">
        <button className="bg-green-500 text-white p-2 rounded" onClick={() => console.log("Yes, I'm here")}>
          Yes, I'm here
        </button>
        <button className="bg-red-500 text-white p-2 rounded" onClick={() => console.log("No")}>
          No
        </button>
      </div>
    </div>
  );
};

export default Tracking;