import { combineReducers } from "redux";
import { Todo } from "../../../types";
import { actions as TodoActions } from "../actions/Todo";

import * as helper from "../../../helper";

const itemReducer = (state = [], action) => {
  switch (action.type) {
    case TodoActions.CREATE_TODO_SUCCESS:
      const { title } = action.payload;
      return helper.create(state, new Todo(title));
    case TodoActions.UPDATE_TODO_SUCCESS:
      const { todoId, todo } = action.payload;
      return helper.update(state, todoId, todo);
    case TodoActions.REMOVE_TODO_SUCCESS:
      const { todoId: todoIdRemove } = action.payload;
      return helper.remove(state, todoIdRemove);
    default:
      return state;
  }
};

/*
* Possible (& possbily not the best) handling for a loading Status
*/

const loading = (state = 0, action) => {
  if (!action.type.includes("TODO")) {
    return state;
  }
  if (action.type.endsWith("START")) {
    return state + 1;
  } else {
    return state - 1;
  }
};

/*
* Possible (& possbily not the best) handling for an error Status
*/
const error = (state = null, action) => {
  if (!action.type.includes("TODO")) {
    return state;
  }
  if (action.type.endsWith("ERROR")) {
    return action.error.msg;
  } else {
    return null;
  }
};

export const mainReducer = combineReducers({
  todos: itemReducer,
  loading,
  error
});
