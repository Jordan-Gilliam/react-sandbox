import { useEffect, useState } from "react";
import { useAnalyticsReducer } from "./useAnalyticsReducer";
import axios from "axios";

const useAnalyticsRequest = initialPayload => {
  const [reqState, setReqState] = useState({});
  const [state, dispatch] = useAnalyticsReducer();
  const { type } = state;

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ initialPayload });
      try {
        const result = await axios({
          method: "post",
          url: "https://app.fakejson.com/q",
          data: {
            token: "Yo9aNRfwZpr8oy1EFbp8MQ",
            data: {
              reqState
            }
          }
        });

        if (Object.keys(reqState).length > 1) {
          console.log(result.data);
          dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [state, dispatch, type, initialPayload, reqState]);

  return [reqState, setReqState];
};

export { useAnalyticsRequest };
