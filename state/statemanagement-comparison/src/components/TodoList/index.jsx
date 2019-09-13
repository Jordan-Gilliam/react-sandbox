import * as React from "react";
import { List } from "antd";
import { TodoListItem } from "./TodoListItem";
import "antd/dist/antd.css";

import { ITodo } from "../../types";

interface IProps {
  todos: ITodo[];
  removeTodoItem: (todo: ITodo) => void;
  updateTodoItem: (id: number, todo: ITodo) => void;
}

export const TodoList = (props: IProps) => {
  const { todos, updateTodoItem, removeTodoItem } = props;
  const unfinishedTodoCount = todos.filter(todo => !todo.finished).length;
  return (
    <List
      footer={<div> Tasks left: {unfinishedTodoCount}</div>}
      bordered
      data-testid="todo-list"
      dataSource={todos}
      renderItem={(item: ITodo) => (
        <TodoListItem
          item={item}
          updateTodoItem={updateTodoItem}
          removeTodoItem={removeTodoItem}
        />
      )}
    />
  );
};
