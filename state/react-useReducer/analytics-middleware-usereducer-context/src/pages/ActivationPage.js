import React, { useContext, useEffect } from "react";
import { StoreContext } from "../analytics/store/StoreContext";

import ActivateButton from "../components/ActivateButton";
import SpecButton from "../components/SpecButton";
import StatusButton from "../components/StatusButton";

const ActivationPage = () => {
  const { state, actions } = useContext(StoreContext);

  useEffect(() => {
    actions.trackActivationButton({
      event: "hi from ACTIVATION_PAGE",
      number: "0",
      date: "0"
    });
  }, []);

  return (
    <>
      <p>PAGE</p>
      <p>event: {state.event} </p>
      <p>number: {state.number} </p>
      <p>date: {state.date} </p>
      <ActivateButton event="hi from ACTIVATION button" number="1" date="1" />
      <SpecButton event="hi from SPEC button" number="2" date="2" />
      <StatusButton event="hi from STATUS button" number="3" date="3" />
    </>
  );
};

export default ActivationPage;
