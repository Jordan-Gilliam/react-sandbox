// 📝 Timings may be inherently inaccurate, due to the implementation of setInterval under the hood.

import * as React from "react";
import { useInterval } from "standard-hooks";

export default function Interval() {
  const [time, setTime] = React.useState(0);

  useInterval(() => {
    const timer = setTime(time + 1);
    return () => clearInterval(timer);
  }, 1000);

  return (
    <>
      <h1>useInterval</h1>
      <p>{`timer: ${0 || time}`}</p>
    </>
  );
}
