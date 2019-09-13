import types from "./types";

export const useActions = middlewareDispatch => ({
  trackActivation: data =>
    middlewareDispatch({ type: types.TRACK_ACTIVATION, payload: data }),
  trackActivationButton: data =>
    middlewareDispatch({ type: types.TRACK_ACTIVATION_BUTTON, payload: data }),
  trackSpecificationButton: data =>
    middlewareDispatch({
      type: types.TRACK_SPECIFICATION_BUTTON,
      payload: data
    }),
  trackStatusButton: data =>
    middlewareDispatch({ type: types.TRACK_STATUS_BUTTON, payload: data })
});
