import * as React from "react";
import { useWindowSize } from "standard-hooks";

export default function WindowSize() {
  const [windowWidth, windowHeight] = useWindowSize();
  return (
    <>
      <h1>useWindowSize</h1>
      <p>{`windowWidth: ${windowWidth}`}</p>
      <p>{`windowHeight: ${windowHeight}`}</p>
    </>
  );
}
