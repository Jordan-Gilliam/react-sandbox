import React, { useContext } from "react";
import { StoreContext } from "../analytics/store/StoreContext";

const ActivateButton = ({ event, number, date }) => {
  const { actions } = useContext(StoreContext);

  return (
    <button
      onClick={() =>
        actions.trackActivationButton({
          event,
          number,
          date
        })
      }
    >
      Track Activation Button
    </button>
  );
};

export default ActivateButton;
