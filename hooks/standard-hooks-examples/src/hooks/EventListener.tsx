import * as React from "react";
import { useEventListener } from "standard-hooks";

export default function EventListener() {
  useEventListener(window, "error", () => {
    console.log("NEW ERROR EVENT 🛑");
  });

  return (
    <>
      <h1>useEventListener</h1>
      <button
        onClick={e => {
          e.preventDefault();
          throw new Error();
        }}
      >
        click me and check console for error
      </button>
    </>
  );
}
