import { observable, computed } from "mobx";
import { observer } from "mobx-react";
import * as React from "react";
import { render } from "react-dom";

import { ITodo } from "../types";
import { TodoList } from "../components/TodoList";
import { CreateTodoInput } from "../components/CreateTodoInput";

import * as helper from "../helper";

class Todo implements ITodo {
  id = Math.random();
  @observable title;
  @observable finished;
  constructor(title, finished: false) {
    this.title = title;
    this.finished = finished;
  }
}
// Definition of MobX store
class TodoListStore {
  @observable todos = [];
}

const store = new TodoListStore();
store.todos.push(
  new Todo("Statemanagement with SetState", true),
  new Todo("Statemanagement with React.Context", true),
  new Todo("Statemanagement with Unstated", true),
  new Todo("Statemanagement with MobX"),
  new Todo("Statemanagement with Redux"),
  new Todo("Statemanagement with Redux Thunk"),
  new Todo("Statemanagement with Apollo Link State")
);

@observer
export class MobXTodoList extends React.Component {
  removeTodoItem = (todoId: number) => {
    this.props.store.todos = helper.remove(this.props.store.todos, todoId);
  };
  createTodoItem = todoTitle => {
    this.props.store.todos = helper.create(
      this.props.store.todos,
      new Todo(todoTitle)
    );
  };
  updateTodoItem = (todoId: number, todo: ITodo) => {
    this.props.store.todos = helper.update(
      this.props.store.todos,
      todoId,
      todo
    );
  };

  render() {
    return (
      <React.Fragment>
        <h1>MobX Todo</h1>
        <CreateTodoInput createTodoItem={this.createTodoItem} />
        <TodoList
          todos={this.props.store.todos}
          removeTodoItem={this.removeTodoItem}
          updateTodoItem={this.updateTodoItem}
        />
      </React.Fragment>
    );
  }
}

render(<MobXTodoList store={store} />, document.getElementById("root"));
