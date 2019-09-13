import React from "react";
import "jest-dom/extend-expect";
import { render, fireEvent, cleanup } from "react-testing-library";
import { StateTodoList } from "../StateTodoList";
import { ContextTodoList } from "../ContextTodoList";
import { UnstatedTodoList, TodoListContainer } from "../UnstatedTodoList";
import { Todo } from "../../types";
import { providers } from "../../mountHelper";

afterEach(cleanup);

Object.entries(providers).forEach(
  ([ProviderName, { component: Component, mounter }]) => {
    describe(`${ProviderName} tests`, () => {
      test("can render with state Todo with defaults", () => {
        const { queryAllByTestId } = render(mounter(null, Component));

        expect(queryAllByTestId("list-item")).toHaveLength(0);
      });

      test("can add Todo to List", async () => {
        const {
          getByPlaceholderText,
          queryAllByTestId,
          getAllByTestId
        } = render(mounter(null, Component));
        expect(queryAllByTestId("list-item")).toHaveLength(0);
        const input = getByPlaceholderText("What needs to be done?");
        fireEvent.change(input, { target: { value: "new Todo" } });
        fireEvent(
          input,
          new KeyboardEvent("keydown", {
            key: "Enter",
            keyCode: 13,
            which: 13,
            bubbles: true
          })
        );
        expect(getAllByTestId("list-item")).toHaveLength(1);
      });

      test("can remove Todo from List", () => {
        const { getByTestId, getAllByTestId, queryAllByTestId } = render(
          mounter({ todos: [new Todo("test")] }, Component)
        );
        expect(getAllByTestId("list-item")).toHaveLength(1);
        const firstTodo = getByTestId("list-item");
        fireEvent.click(firstTodo.querySelector(".anticon-close-circle"), {});

        expect(queryAllByTestId("list-item")).toHaveLength(0);
      });

      test("can edit Todo", () => {
        const { getByTestId, getByText, getAllByTestId, debug } = render(
          mounter({ todos: [new Todo("test")] }, Component)
        );

        expect(getAllByTestId("list-item")).toHaveLength(1);
        const firstTodo = getByTestId("list-item");
        fireEvent.click(getByTestId("edit-todo"), {});
        const editInput = firstTodo.querySelector("input");
        fireEvent.change(editInput, {
          target: { value: "changed Todo" }
        });
        fireEvent(
          editInput,
          new KeyboardEvent("keydown", {
            key: "Enter",
            keyCode: 13,
            which: 13,
            bubbles: true
          })
        );
        expect(getByTestId("title").textContent).toBe("changed Todo");
      });

      test("can toggle Todo", () => {
        const { getByTestId, getAllByTestId } = render(
          mounter({ todos: [new Todo("test")] }, Component)
        );

        expect(getAllByTestId("list-item")).toHaveLength(1);
        const firstTodo = getByTestId("list-item");
        expect(getByTestId("checkbox")).toHaveAttribute("value", "false");
        fireEvent.click(getByTestId("checkbox"));
        expect(getByTestId("checkbox")).toHaveAttribute("value", "true");
        fireEvent.click(getByTestId("checkbox"));
        expect(getByTestId("checkbox")).toHaveAttribute("value", "false");
      });
    });
  }
);
