import * as React from "react";
import { useGeolocation } from "standard-hooks";

export default function Geolocation() {
  const geolocation = useGeolocation();

  if (geolocation) {
    const { coords } = geolocation;
    return (
      <>
        <h1>useGeolocation</h1>
        <p>{`latitude: ${coords.latitude}`}</p>
        <p>{`longitude: ${coords.longitude}`}</p>
      </>
    );
  }

  return (
    <>
      <h1>useGeolocation</h1>
      <p>enable geolocation</p>
    </>
  );
}
