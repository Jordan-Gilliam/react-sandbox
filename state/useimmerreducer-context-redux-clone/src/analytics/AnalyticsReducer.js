const analyticsReducer = (draft, action) => {
  switch (action.type) {
    case "field": {
      draft[action.fieldName] = action.payload;
      return;
    }
    case "FETCH_INIT": {
      draft.type = action.type;
      return;
    }
    case "FETCH_SUCCESS": {
      draft.type = action.type;
      console.log("success", action.payload);
      return;
    }
    case "FETCH_FAILURE": {
      draft.type = action.type;
      console.log("error");
      return;
    }
    case "TRACK_ACTIVATION": {
      draft.type = action.type;
      draft.event = action.event;
      draft.phase = action.phase;
      return;
    }
    case "TRACK_SPECIFICATION": {
      draft.type = action.type;
      draft.event = action.event;
      draft.phase = action.phase;
      return;
    }
    case "TRACK_STATUS": {
      draft.type = action.type;
      draft.event = action.event;
      draft.phase = action.phase;
      return;
    }
    default:
      return;
  }
};

export { analyticsReducer };
