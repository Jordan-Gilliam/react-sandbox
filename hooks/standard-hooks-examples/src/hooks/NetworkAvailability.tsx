// ⚠️ This attribute is inherently unreliable. A computer can be connected to a network without having internet access.
import * as React from "react";
import { useNetworkAvailability } from "standard-hooks";

export default function NetworkAvailability() {
  const isOnline = useNetworkAvailability();

  return (
    <>
      <h1>useNetworkAvailability</h1>
      <p>{`isOnline: ${isOnline}`}</p>
    </>
  );
}
