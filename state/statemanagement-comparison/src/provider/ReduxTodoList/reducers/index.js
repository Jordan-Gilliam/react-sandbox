import { combineReducers } from "redux";
import { Todo } from "../../../types";
import { actions as TodoActions } from "../actions/Todo";

import * as helper from "../../../helper";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case TodoActions.CREATE_TODO:
      const { title } = action.payload;
      return helper.create(state, new Todo(title));
    case TodoActions.UPDATE_TODO:
      const { todoId, todo } = action.payload;
      return helper.update(state, todoId, todo);
    case TodoActions.REMOVE_TODO:
      const { todoId: todoIdRemove } = action.payload;
      return helper.remove(state, todoIdRemove);
    default:
      return state;
  }
};

export const mainReducer = combineReducers({
  todos: todoReducer
});
/**
 * your Redux Store is defined by the reducers
 * initialState = {
 *   todos: []
 * }
 */
