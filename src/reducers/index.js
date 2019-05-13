import { ADD_TODO } from '../actions';

const initialState = {
  todos: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = action.payload;
      const newTodos = state.todos;
      newTodos.push(newTodo);
      console.log(state)
      console.log(newTodos);
      return {
        ...state,
        todos: newTodos
      };
    // case 'ANOTHER_ACTION_TYPE':
    default:
      return state;
  }
};
