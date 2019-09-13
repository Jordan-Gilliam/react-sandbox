import axios from "axios";
import { initialState } from "./reducers";
import types from "./types";
// Capture event => POST analytics payload to analytics api => dispatch response status
export const applyMiddleware = dispatch => ({ payload }) => {
  // Grab token from 'https://app.fakejson.com/member'
  const request = axios({
    method: "post",
    url: "https://app.fakejson.com/q",
    data: {
      token: "",
      data: {
        payload
      }
    }
  });

  return request
    .then(() => dispatch({ type: types.SUCCESS, payload }))
    .catch(error => dispatch({ type: types.FAILURE, error }));
};
