import statusTypes from "./types";
const initialState = { product: "personal-portal" };

const reducer = (state = initialState, { statusType, payload }) => {
  switch (statusType) {
    case statusTypes.SUCCESS: {
      console.log({ ...state, ...payload });
      return { ...state, ...payload };
    }
    case statusTypes.FAILURE: {
      console.log("error", { ...state, ...payload });
      return { ...state, ...payload };
    }
    default:
      return state;
  }
};
export { initialState, reducer };
