import * as React from "react";
import { useWindowScrollCoords } from "standard-hooks";

export default function WindowScrollCoords() {
  const [windowScrollX, windowScrollY] = useWindowScrollCoords();
  return (
    <>
      <h1>useWindowScrollCoords</h1>
      <p>{`windowScrollX: ${windowScrollX}`}</p>
      <p>{`windowScrollY: ${windowScrollY}`}</p>
    </>
  );
}
