import * as React from "react";
import { useDeviceMotion } from "standard-hooks";

export default function DeviceMotion() {
  const { acceleration, rotationRate, interval } = useDeviceMotion();
  return (
    <>
      <h1>useDeviceMotion</h1>
      <p>{`acceleration: ${JSON.stringify(acceleration)}`}</p>
      <p>{`rotationRate: ${JSON.stringify(rotationRate)}`}</p>
      <p>{`interval: ${interval}`}</p>
    </>
  );
}
