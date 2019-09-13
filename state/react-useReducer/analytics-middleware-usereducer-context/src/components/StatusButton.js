import React, { useContext } from "react";
import { StoreContext } from "../analytics/store/StoreContext";

const StatusButton = ({ event, number, date }) => {
  const { actions } = useContext(StoreContext);

  return (
    <button
      onClick={() =>
        actions.trackStatusButton({
          event,
          number,
          date
        })
      }
    >
      Track Status Button
    </button>
  );
};

export default StatusButton;
