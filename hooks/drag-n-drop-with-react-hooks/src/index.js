import React, { useState } from "react";
import ReactDOM from "react-dom";
import DragItem from "./components/drag-item";
import DropItem from "./components/drop-item";

import "./styles.css";

const todos = {
  1: {
    text: "First thing",
    state: "todo"
  },
  2: {
    text: "Second thing",
    state: "todo"
  },
  3: {
    text: "Third thing",
    state: "todo"
  },
  4: {
    text: "Fourth thing",
    state: "todo"
  }
};

function App() {
  const [todoValues, setValue] = useState(todos);
  return (
    <div className="App">
      <div className="box">
        <DropItem
          heading="Todos"
          onDrop={id => {
            const currentTodo = { ...todoValues[id] };
            currentTodo.state = "todo";
            setValue({ ...todoValues, ...{ [id]: currentTodo } });
          }}
        >
          {Object.keys(todoValues)
            .map(key => ({ id: key, ...todoValues[key] }))
            .filter(todo => todo.state === "todo")
            .map(todo => <DragItem id={todo.id} data={todo} key={todo.id} />)}
        </DropItem>
        <DropItem
          heading="WIP"
          onDrop={id => {
            const currentTodo = { ...todoValues[id] };
            currentTodo.state = "wip";
            setValue({ ...todoValues, ...{ [id]: currentTodo } });
          }}
        >
          {Object.keys(todoValues)
            .map(key => ({ id: key, ...todoValues[key] }))
            .filter(todo => todo.state === "wip")
            .map(todo => <DragItem id={todo.id} data={todo} key={todo.id} />)}
        </DropItem>
        <DropItem
          heading="Done"
          onDrop={id => {
            const currentTodo = { ...todoValues[id] };
            currentTodo.state = "done";
            setValue({ ...todoValues, ...{ [id]: currentTodo } });
          }}
        >
          {Object.keys(todoValues)
            .map(key => ({ id: key, ...todoValues[key] }))
            .filter(todo => todo.state === "done")
            .map(todo => <DragItem id={todo.id} data={todo} key={todo.id} />)}
        </DropItem>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
