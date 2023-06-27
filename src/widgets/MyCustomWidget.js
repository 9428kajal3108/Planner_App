import React, { useState, useEffect } from "react";

const MyCustomWidget = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.log(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        },
      );
    };

    getLocation();
  }, []);

  return (
    <div>
      <h1>Your Location Widget</h1>
      <p>
        Latitude: {latitude}
      </p>
      <p>
        Longitude: {longitude}
      </p>
    </div>
  );
};

export default MyCustomWidget;
