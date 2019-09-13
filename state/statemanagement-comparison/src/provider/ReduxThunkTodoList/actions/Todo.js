export const actions = {
  CREATE_TODO_START: "CREATE_TODO_START",
  CREATE_TODO_SUCCESS: "CREATE_TODO_SUCCESS",
  CREATE_TODO_ERROR: "CREATE_TODO_ERROR",
  UPDATE_TODO_START: "UPDATE_TODO_START",
  UPDATE_TODO_SUCCESS: "UPDATE_TODO_SUCCESS",
  UPDATE_TODO_ERROR: "UPDATE_TODO_ERROR",
  REMOVE_TODO_START: "REMOVE_TODO_START",
  REMOVE_TODO_SUCCESS: "REMOVE_TODO_SUCCESS",
  REMOVE_TODO_ERROR: "REMOVE_TODO_ERROR"
};

export const createTodoItem = (title: string) => async (dispatch, getState) => {
  dispatch({
    type: actions.CREATE_TODO_START
  });
  // Mocking Server Communication here
  await new Promise(resolve => setTimeout(resolve, 300));
  if (Math.random() < 0.3) {
    dispatch({
      type: actions.CREATE_TODO_ERROR,
      error: {
        msg: "Unexpected Error"
      }
    });
  } else {
    dispatch({
      type: actions.CREATE_TODO_SUCCESS,
      payload: {
        title
      }
    });
  }
};

export const updateTodoItem = (todoId, todo) => async (dispatch, getState) => {
  dispatch({
    type: actions.UPDATE_TODO_START
  });
  // Mocking Server Communication here
  await new Promise(resolve => setTimeout(resolve, 300));
  if (Math.random() < 0.3) {
    dispatch({
      type: actions.UPDATE_TODO_ERROR,
      error: {
        msg: "Unexpected Error"
      }
    });
  } else {
    dispatch({
      type: actions.UPDATE_TODO_SUCCESS,
      payload: {
        todo,
        todoId
      }
    });
  }
};

export const removeTodoItem = todoId => async (dispatch, getState) => {
  dispatch({
    type: actions.REMOVE_TODO_START
  });
  // Mocking Server Communication here
  await new Promise(resolve => setTimeout(resolve, 300));
  if (Math.random() < 0.3) {
    dispatch({
      type: actions.REMOVE_TODO_ERROR,
      error: {
        msg: "Unexpected Error"
      }
    });
  } else {
    dispatch({
      type: actions.REMOVE_TODO_SUCCESS,
      payload: {
        todoId
      }
    });
  }
};
