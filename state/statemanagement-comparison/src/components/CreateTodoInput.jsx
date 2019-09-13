import React from "react";
import { Input } from "antd";
import { ITodo } from "../types";

interface IProps {
  createTodoItem: (todoTitle: string) => void;
}

export class CreateTodoInput extends React.Component<IProps> {
  static initialState = {
    value: ""
  };
  state = {
    ...CreateTodoInput.initialState
  };
  changeValue = e => {
    this.setState({ value: e.target.value });
  };
  handlePressEnterNewTodo = e => {
    this.props.createTodoItem(e.target.value);
    this.setState({ ...CreateTodoInput.initialState });
  };

  render() {
    const { value } = this.state;
    return (
      <Input
        value={value}
        onChange={this.changeValue}
        placeholder="What needs to be done?"
        onPressEnter={this.handlePressEnterNewTodo}
      />
    );
  }
}
