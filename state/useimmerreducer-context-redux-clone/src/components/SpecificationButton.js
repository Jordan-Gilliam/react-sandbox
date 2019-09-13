import React from "react";
import { useAnalyticsRequest } from "../analytics/useAnalyticsRequest";

import "./styles.css";

const SpecificationButton = () => {
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
            type: "TRACK_SPECIFICATION",
            event: "user clicked Spec Btn",
            phase: "Handover"
          })
        }
      >
        TRACK_SPECIFICATION
      </button>
    </>
  );
};
export default SpecificationButton;
