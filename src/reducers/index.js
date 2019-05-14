import { ADD_TODO, TOGGLE, DELETE } from '../actions';

const initialState = {
  todos: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = action.payload;
      const newTodos = [...state.todos, newTodo];
      return {
        ...state,
        todos: newTodos
      };
    case TOGGLE:
      const status = action.payload.status;
      const ind = action.payload.index;
      const newState = state.todos.map((todo, index) => {
        if (index == ind) todo.completed = status;
        return todo;
      })
    case DELETE:
      console.log(action);
      const indice = action.payload;
      console.log("del", indice)
      const newStateD = state.todos.filter((todo, index) => index != indice)
      return {
        ...state,
        todos: newStateD
      } 
    // case 'ANOTHER_ACTION_TYPE':
    default:
      return state;
  }
};
