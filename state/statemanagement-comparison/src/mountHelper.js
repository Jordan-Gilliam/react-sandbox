import * as React from "react";
import { StateTodoList } from "./provider/StateTodoList";
import { ContextTodoList } from "./provider/ContextTodoList";
import {
  UnstatedTodoList,
  TodoListContainer,
  mountUnstated
} from "./provider/UnstatedTodoList";
import { Provider, Subscribe, Container } from "unstated";
import {
  ApolloLinkStateTodoList,
  mountWithApollo
} from "./provider/ApolloLinkStateTodoList";
import {
  ConnectedReduxTodoList,
  mountWithRedux
} from "./provider/ReduxTodoList";

import {
  ConnectedReduxThunkTodoList,
  mountWithReduxThunk
} from "./provider/ReduxThunkTodoList";

export const mountWithInitialProps = (initialState, C) => (
  <C initialState={initialState ? { ...initialState } : null} />
);

export const providers = {
  StateTodoList: {
    component: StateTodoList,
    mounter: mountWithInitialProps
  },
  ContextTodoList: {
    component: ContextTodoList,
    mounter: mountWithInitialProps
  },
  UnstatedTodoList: {
    component: UnstatedTodoList,
    mounter: mountUnstated(TodoListContainer)
  },
  ApolloLinkStateTodoList: {
    component: ApolloLinkStateTodoList,
    mounter: mountWithApollo
  },
  ReduxTodoList: {
    component: ConnectedReduxTodoList,
    mounter: mountWithRedux
  },
  ReduxThunkTodoList: {
    component: ConnectedReduxThunkTodoList,
    mounter: mountWithReduxThunk
  }
};

export const renderWithProvider = ({ component, mounter }, initialState) =>
  mounter(initialState, component);
