export const ADD_TODO = 'ADD_TODO';

export const addTodo = todo => {
  // the returned object is an "action"
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const TOGGLE = "TOGGLE";

export const toggle = (index, status) => {
  return {
    type: TOGGLE,
    payload: {
      index: index,
      status: status
    }
  }
}

export const DELETE = "DELETE";

export const deleteTodo = (index) => {
  return {
    type: DELETE,
    payload: index
  }
}

