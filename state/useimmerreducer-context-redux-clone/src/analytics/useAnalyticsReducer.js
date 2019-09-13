import { useContext } from "react";
import { StateContext, DispatchContext } from "./AnalyticsContext";

export const useAnalyticsReducer = () => [
  useContext(StateContext),
  useContext(DispatchContext)
];
