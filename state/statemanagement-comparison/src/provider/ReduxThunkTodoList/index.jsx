import * as React from "react";
import { render } from "react-dom";

import { createStore, compose, applyMiddleware } from "redux";
import { connect, Provider } from "react-redux";
import { mainReducer as reducer } from "./reducers";
import * as TodoActions from "./actions/Todo";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

// The Redux Component behave exactly like in simple Redux
import { ReduxTodoList } from "../ReduxTodoList";

const LoadingReduxTodoList = props => {
  return (
    <React.Fragment>
      {props.loading !== 0 && "Loading"}
      {props.error !== null && props.error}
      <ReduxTodoList {...props} title="Redux Thunk Todo List" />;
    </React.Fragment>
  );
};

export const mountWithReduxThunk = (initialState, Component) => {
  const store = createStore(
    reducer,
    initialState ? initialState : { todos: [], loading: false, error: null },
    composeWithDevTools(applyMiddleware(thunk))
  );
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
};

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
  loading: state.loading,
  error: state.error
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createTodoItem: title => {
    dispatch(TodoActions.createTodoItem(title));
  },
  updateTodoItem: (todoId, todo) => {
    dispatch(TodoActions.updateTodoItem(todoId, todo));
  },
  removeTodoItem: todoId => {
    dispatch(TodoActions.removeTodoItem(todoId));
  }
});

export const ConnectedReduxThunkTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadingReduxTodoList);
