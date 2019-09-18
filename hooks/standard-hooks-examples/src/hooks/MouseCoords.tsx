import * as React from "react";
import { useMouseCoords } from "standard-hooks";

export default function MouseCoords() {
  const [mouseX, mouseY] = useMouseCoords();
  return (
    <>
      <h1>useMouseCoords</h1>
      <p>{`mouseX: ${mouseX}`}</p>
      <p>{`mouseY: ${mouseY}`}</p>
    </>
  );
}
