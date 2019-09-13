import * as React from "react";
import { Icon, List, Checkbox, Input } from "antd";
import { ITodo } from "../../types.js";

interface IProps {
  item: ITodo;
  removeTodoItem: (todo: ITodo) => void;
  updateTodoItem: (id: number, todo: ITodo) => void;
}

export class TodoListItem extends React.Component<IProps> {
  static initialState = {
    editing: false,
    editValue: ""
  };

  state = { ...TodoListItem.initialState };

  constructor(props) {
    super(props);
    this.editInputRef = React.createRef();
  }

  handlePressEnterEditTodo = e => {
    const newCurrentEditedTodo = { ...this.props.item };
    newCurrentEditedTodo.title = this.state.editValue;
    this.props.updateTodoItem(this.props.item.id, newCurrentEditedTodo);
    this.setState({ ...TodoListItem.initialState });
  };

  updateStateInputValue = (key: string) => e => {
    const stateChange = {};
    stateChange[key] = e.currentTarget.value;
    this.setState(stateChange);
  };

  toggleTodoItem = todo => {
    this.props.updateTodoItem(todo.id, { ...todo, finished: !todo.finished });
  };

  toggleEditing = () => {
    this.setState(
      state => {
        return {
          editing: !state.editing,
          editValue: state.editing ? this.props.item.title : ""
        };
      },
      () => {
        if (this.state.editing) {
          this.editInputRef.current.input.focus();
        }
      }
    );
  };

  handleKeyDown = e => {
    if (e.keyCode === 27) {
      this.setState(TodoListItem.initialState);
    }
  };

  render() {
    const { item, removeTodoItem } = this.props;
    return this.state.editing ? (
      <List.Item data-testid="list-item">
        <Input
          ref={this.editInputRef}
          value={this.state.editValue}
          onChange={this.updateStateInputValue("editValue")}
          onKeyDown={this.handleKeyDown}
          onPressEnter={this.handlePressEnterEditTodo}
        />
      </List.Item>
    ) : (
      <List.Item
        data-testid="list-item"
        actions={[
          <Icon
            data-testid="edit-todo"
            type="edit"
            theme="filled"
            onClick={this.toggleEditing}
          />,
          <Icon
            data-testid="remove-todo"
            type="close-circle"
            theme="filled"
            onClick={() => removeTodoItem(item.id)}
          />
        ]}
      >
        <Checkbox
          data-testid="checkbox"
          value={item.finished}
          checked={item.finished}
          onChange={() => this.toggleTodoItem(item)}
        >
          <span data-testid="title">{item.title}</span>
        </Checkbox>
      </List.Item>
    );
  }
}
