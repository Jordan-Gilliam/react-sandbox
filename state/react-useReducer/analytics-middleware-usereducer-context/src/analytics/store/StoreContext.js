import React, { createContext, useReducer } from "react";
import { reducer, initialState } from "./reducers";
import { useActions } from "./actions";
import { applyMiddleware } from "./middleware";

const StoreContext = createContext(initialState);

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // Attach middleware to capture every dispatch
  const enhancedDispatch = applyMiddleware(dispatch);

  const actions = useActions(enhancedDispatch);

  return (
    <StoreContext.Provider value={{ state, actions }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
