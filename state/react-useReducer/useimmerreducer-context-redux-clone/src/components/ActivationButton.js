import React from "react";
import { useAnalyticsRequest } from "../analytics/useAnalyticsRequest";

import "./styles.css";

const ActivationButton = () => {
  const [payload, setDispatchPayload] = useAnalyticsRequest();
  const { type, event, phase } = payload;
  return (
    <>
      <div>
        <p>TYPE: {type}</p>
        <p>Event: {event}</p>
        <p>Phase: {phase}</p>
      </div>
      <button
        onClick={() =>
          setDispatchPayload({
            type: "TRACK_ACTIVATION",
            event: "user clicked activation btn",
            phase: "Welcome"
          })
        }
      >
        TRACK_ACTIVATION
      </button>
    </>
  );
};

export default ActivationButton;
