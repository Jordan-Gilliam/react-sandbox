import React from "react";
import { useAnalyticsRequest } from "../analytics/useAnalyticsRequest";

import "./styles.css";

const StatusButton = () => {
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
            type: "TRACK_STATUS",
            event: "user clicked status btn",
            phase: "HI"
          })
        }
      >
        TRACK_STATUS
      </button>
    </>
  );
};

export default StatusButton;
