import React from 'react';
import './Todo.scss';

function Todo(props) {
  console.log("Todo", props)
  return (
    <div>
      <div
        className={`todo completed-${props.todo.completed}`}
        onClick={e => props.toggle(e, props.index, !props.todo.completed)}
      >
        {props.todo.value}
      </div>
      <button onClick={e => props.delete(e, props.index)}>X</button>
    </div>
  );
}
  
  export default Todo;