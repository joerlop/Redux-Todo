import React from 'react';
import './Todo.scss';

import { connect } from 'react-redux';

import Todo from "./Todo";

function TodoList(props) {
  // console.log("TodoList", props);
  return (
    //necesito pasar this.props.todo
    <div className="todo-container">
      {    props.todos.map((todo, index) => 
      <Todo todo={todo} index={index} toggle={props.toggle} delete={props.deleteTodo}/>
    )}
    </div>
  );
}

export default TodoList;