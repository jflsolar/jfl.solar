'use client'

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useCallback, useState } from "react";

const containerStyle = {
  width: "100%",
  height: "400px", // Adjust height as needed
};

const center = {
  lat: 14.281802962787859, // Latitude (e.g., Manila)
  lng: 120.96894613958402, // Longitude
};

const Map: React.FC = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback((map: google.maps.Map | null) => {
    setMap(null);
  }, []);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13} // Set zoom level
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
