import * as React from "react";
import { useDeviceOrientation } from "standard-hooks";

export default function DeviceOrientation() {
  const { alpha, beta, gamma } = useDeviceOrientation();
  return (
    <>
      <h1>useDeviceOrientation</h1>
      <p>{`alpha: ${alpha}`}</p>
      <p>{`beta: ${beta}`}</p>
      <p>{`gamma: ${gamma}`}</p>
    </>
  );
}
