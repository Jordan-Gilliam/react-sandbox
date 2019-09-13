import React, { useContext } from "react";
import { StoreContext } from "../analytics/store/StoreContext";

const SpecButton = ({ event, number, date }) => {
  const { actions } = useContext(StoreContext);

  return (
    <button
      onClick={() =>
        actions.trackSpecificationButton({
          event,
          number,
          date
        })
      }
    >
      Track Specification Button
    </button>
  );
};

export default SpecButton;
