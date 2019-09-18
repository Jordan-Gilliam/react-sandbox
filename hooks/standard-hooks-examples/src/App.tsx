import * as React from "react";

import DocumentReadiness from "./hooks/DocumentReadiness";
import DocumentVisibility from "./hooks/DocumentVisibility";
import Geolocation from "./hooks/Geolocation";
import MouseCoords from "./hooks/MouseCoords";
import NetworkAvailability from "./hooks/NetworkAvailability";
import PreferredLanguages from "./hooks/PreferredLanguages";
import WindowScrollCoords from "./hooks/WindowScrollCoords";
import WindowSize from "./hooks/WindowSize";
import LocalStorage from "./hooks/LocalStorage";
import SessionStorage from "./hooks/SessionStorage";
import EventListener from "./hooks/EventListener";
import Interval from "./hooks/Interval";
import DeviceMotion from "./hooks/DeviceMotion";
import DeviceOrientation from "./hooks/DeviceOrientation";

export default function App() {
  return (
    <div className="App">
      <h1>
        standard-hooks{" "}
        <span aria-label="fish-emoji" role="img">
          🎣
        </span>
      </h1>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/kripod/standard-hooks/blob/master/README.md"
      >
        <span aria-label="laptop emoji" role="img">
          github 💻
        </span>
      </a>
      <br />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://yarnpkg.com/en/package/standard-hooks"
      >
        <span aria-label="yarn emoji" role="img">
          yarn 🧶
        </span>
      </a>
      <hr />
      <DocumentReadiness />
      <hr />
      <DocumentVisibility />
      <hr />
      <Geolocation />
      <hr />
      <MouseCoords />
      <hr />
      <NetworkAvailability />
      <hr />
      <PreferredLanguages />
      <hr />
      <WindowScrollCoords />
      <hr />
      <WindowSize />
      <hr />
      <LocalStorage />
      <hr />
      <SessionStorage />
      <hr />
      <EventListener />
      <hr />
      <Interval />
      <hr />
      <DeviceMotion />
      <hr />
      <DeviceOrientation />
      <hr />
    </div>
  );
}
