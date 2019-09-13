import * as React from "react";
import { render } from "react-dom";

import { createStore } from "redux";
import { connect, Provider } from "react-redux";
import { mainReducer as reducer } from "./reducers";
import * as TodoActions from "./actions/Todo";

import { TodoList } from "../../components/TodoList";
import { CreateTodoInput } from "../../components/CreateTodoInput";

import { devToolsEnhancer } from "redux-devtools-extension";

export const mountWithRedux = (initialState, Component) => {
  const store = createStore(
    reducer,
    initialState ? initialState : {},
    devToolsEnhancer()
  );
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
};

export class ReduxTodoList extends React.Component {
  render() {
    const {
      todos,
      createTodoItem,
      updateTodoItem,
      removeTodoItem,
      title
    } = this.props;
    return (
      <React.Fragment>
        <h1>{title ? title : "Redux List"}</h1>
        <CreateTodoInput createTodoItem={createTodoItem} />
        <TodoList
          todos={todos}
          removeTodoItem={removeTodoItem}
          updateTodoItem={updateTodoItem}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos
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

export const ConnectedReduxTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxTodoList);
