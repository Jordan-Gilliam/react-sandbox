import React, { createContext } from "react";
import { useImmerReducer } from "use-immer";
import { analyticsReducer } from "./AnalyticsReducer";

const StateContext = createContext();
const DispatchContext = createContext();

const initialState = { product: "personal-portal" };

const AnalyticsContextProvider = ({ children }) => {
  const [state, dispatch] = useImmerReducer(analyticsReducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export { AnalyticsContextProvider, StateContext, DispatchContext };
