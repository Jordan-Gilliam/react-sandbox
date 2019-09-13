export const actions = {
  CREATE_TODO: "CREATE_TODO",
  UPDATE_TODO: "UPDATE_TODO",
  REMOVE_TODO: "REMOVE_TODO"
};

export const createTodoItem = (title: string) => ({
  type: actions.CREATE_TODO,
  payload: {
    title
  }
});

export const updateTodoItem = (todoId, todo) => ({
  type: actions.UPDATE_TODO,
  payload: {
    todo,
    todoId
  }
});

export const removeTodoItem = todoId => ({
  type: actions.REMOVE_TODO,
  payload: {
    todoId
  }
});
