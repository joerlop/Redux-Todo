export const ADD_TODO = 'ADD_TODO';

export const addTodo = todo => {
  // the returned object is an "action"
  return {
    type: ADD_TODO,
    payload: todo
  };
};
