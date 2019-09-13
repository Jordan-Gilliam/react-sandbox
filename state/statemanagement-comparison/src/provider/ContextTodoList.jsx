import * as React from "react";
import { render } from "react-dom";

import { ITodo, Todo } from "../types";
import { TodoList } from "../components/TodoList";
import { CreateTodoInput } from "../components/CreateTodoInput";

import * as helper from "../helper";

const Context = React.createContext();

export class ContextTodoList extends React.Component {
  static Consumer = Context.Consumer;
  static Provider = Context.Provider;

  constructor(props) {
    super(props);

    const defaultState = { todos: [] };
    this.state = props.initialState ? props.initialState : defaultState;
  }

  /* TODO: find out why it may be useful to insert 
  * your state Functions inside the state
  * (e.g.: https://reactjs.org/docs/context.html#updating-context-from-a-nested-component)
  */

  removeTodoItem = (todoId: number) => {
    this.setState(state => {
      return {
        todos: helper.remove(state.todos, todoId)
      };
    });
  };

  createTodoItem = (todoTitle: string) => {
    this.setState(state => {
      return {
        todos: helper.create(state.todos, new Todo(todoTitle))
      };
    });
  };

  updateTodoItem = (todoId: number, todo: ITodo) => {
    this.setState(state => {
      return {
        todos: helper.update(state.todos, todoId, todo)
      };
    });
  };

  render() {
    return (
      <ContextTodoList.Provider
        value={{
          state: {
            ...this.state
          },
          actions: {
            createTodoItem: this.createTodoItem,
            updateTodoItem: this.updateTodoItem,
            removeTodoItem: this.removeTodoItem
          }
        }}
      >
        <React.Fragment>
          <h1>Context Todo</h1>
          {/* the two consumer seem useless here, but imagine them somewhere nested in our UI */}
          <ContextTodoList.Consumer>
            {({ actions }) => (
              <CreateTodoInput createTodoItem={actions.createTodoItem} />
            )}
          </ContextTodoList.Consumer>
          <ContextTodoList.Consumer>
            {({ state, actions }) => (
              <TodoList
                todos={state.todos}
                removeTodoItem={actions.removeTodoItem}
                updateTodoItem={actions.updateTodoItem}
              />
            )}
          </ContextTodoList.Consumer>
        </React.Fragment>
      </ContextTodoList.Provider>
    );
  }
}

/*render(
  <ContextTodoList
    todos={[
      new Todo("Statemanagement with SetState", true),
      new Todo("Statemanagement with React.Context"),
      new Todo("Statemanagement with Unstated"),
      new Todo("Statemanagement with MobX"),
      new Todo("Statemanagement with Redux"),
      new Todo("Statemanagement with Redux Thunk"),
      new Todo("Statemanagement with Apollo Link State")
    ]}
  />,
  document.getElementById("root")
);*/
