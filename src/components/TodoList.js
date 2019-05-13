import React from 'react';
import './Todo.scss';

import { connect } from 'react-redux';

import Todo from "./Todo";

function TodoList(props) {
  console.log("TodoList", props);
  return (
    //necesito pasar this.props.todo
    props.todos.map(todo => 
      <Todo todo={todo} />
    )
  );
}

export default TodoList;