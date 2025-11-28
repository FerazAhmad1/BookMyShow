import { useState } from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";

const DetectLocation = () => {
  const [location, setLocation] = useState({
    latitude: 28.7041,
    lognitude: 77.1025,
  });
  const clickHandler = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos: GeolocationPosition) {
      const crd = pos.coords;
      const nwLocation = { latitude: crd.latitude, lognitude: crd.longitude };
      setLocation(nwLocation);
      console.log("Your current position is:");
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
    }

    function error(err: GeolocationPositionError) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  };
  return (
    <>
      <div
        className="flex items-center gap-4 text-red-500 "
        onClick={clickHandler}
      >
        <FaLocationCrosshairs />
        <p>Detect Location</p>
      </div>
      <p>
        latitude:{location.latitude},lognitude:{location.lognitude}
      </p>
    </>
  );
};

export default DetectLocation;
