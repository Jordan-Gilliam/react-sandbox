import { render } from "react-dom";
import { providers, renderWithProvider } from "./mountHelper";
import { Todo } from "./types";

const initialState = {
  todos: [
    new Todo("Statemanagement with SetState"),
    new Todo("Statemanagement with React.Context"),
    new Todo("Statemanagement with Unstated"),
    //new Todo("Statemanagement with MobX"),
    new Todo("Statemanagement with Redux"),
    new Todo("Statemanagement with Redux Thunk"),
    new Todo("Statemanagement with Apollo Link State")
  ]
};

render(
  renderWithProvider(providers.StateTodoList, initialState),
  // renderWithProvider(providers.ContextTodoList, initialState),
  // renderWithProvider(providers.UnstatedTodoList, initialState),
  //renderWithProvider(providers.ReduxTodoList, initialState),
  // renderWithProvider(providers.ReduxThunkTodoList, initialState),
  //renderWithProvider(providers.ApolloLinkStateTodoList, initialState),
  document.getElementById("root")
);
