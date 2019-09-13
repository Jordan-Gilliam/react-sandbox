import * as React from "react";
import { render } from "react-dom";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider, Query } from "react-apollo";
import { withClientState } from "apollo-link-state";
import { ApolloLink } from "apollo-link";
import gql from "graphql-tag";

import { TodoList } from "../components/TodoList";
import { CreateTodoInput } from "../components/CreateTodoInput";

import { Todo, ITodo } from "../types";
import * as helper from "../helper";

export const mountWithApollo = (initialState, Component) => {
  const cache = new InMemoryCache();
  // define the initial Store

  const defaultState = { todos: [] };
  const stateLink = withClientState({
    cache,
    defaults: initialState ? initialState : defaultState
  });
  const client = new ApolloClient({
    cache,
    link: stateLink
  });

  return (
    <ApolloProvider client={client}>
      <Component />
    </ApolloProvider>
  );
};

// We are querying our local State with GraphQL
// @client defines that this element is called from cache
const TODO_QUERY = gql`
  {
    todos @client {
      id
      title
      finished
    }
  }
`;

export class ApolloLinkStateTodoList extends React.Component {
  removeTodoItem = (cache, queryData) => (todoId: number) => {
    const currentTodos = queryData.todos;
    cache.writeData({
      data: {
        todos: helper.remove(currentTodos, todoId)
      }
    });
  };

  createTodoItem = (cache, queryData) => (todoTitle: string) => {
    const currentTodos = queryData.todos;
    cache.writeData({
      data: {
        todos: helper.create(currentTodos, new Todo(todoTitle))
      }
    });
  };

  updateTodoItem = (cache, queryData) => (todoId: number, todo: ITodo) => {
    const currentTodos = queryData.todos;
    cache.writeData({
      data: {
        todos: helper.update(currentTodos, todoId, todo)
      }
    });
  };

  render() {
    return (
      <Query query={TODO_QUERY}>
        {({ client, data }) => (
          <React.Fragment>
            <h1>Apollo Link State Todo</h1>
            <CreateTodoInput
              createTodoItem={this.createTodoItem(client, data)}
            />
            <TodoList
              todos={data.todos}
              removeTodoItem={this.removeTodoItem(client, data)}
              updateTodoItem={this.updateTodoItem(client, data)}
            />
          </React.Fragment>
        )}
      </Query>
    );
  }
}
