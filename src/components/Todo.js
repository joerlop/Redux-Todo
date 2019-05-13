import React from 'react';
import './Todo.scss';

function Todo(props) {
  return (
    <div>
      {props.todo.value}
    </div>      
  );
}
  
  export default Todo;