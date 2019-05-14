import React from 'react';
import './App.scss';

import TodoList from "./components/TodoList"

import { connect } from 'react-redux';

import { addTodo, toggle, deleteTodo } from './actions';

class App extends React.Component {
  state = {
    todo: {
      value: "",
      completed: false
    }
  };

  handleChanges = event => {
    this.setState({
      todo: {
        value: event.target.value,
        completed: false,
      }
    })
  }

  add = event => {
    event.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({
      todo: {
        value: "",
        completed: false
      }
    });
  }

  toggle = (event, index, status) => {
    event.preventDefault();
    this.props.toggle(index, status);
  }

  deleteTodo = (e, index) => {
    console.log("delete");
    e.preventDefault();
    this.props.deleteTodo(index);
  }

  render() {
    return (
      <div className="App">
        <TodoList todos={this.props.todosFromRedux} toggle={this.toggle} deleteTodo={this.deleteTodo}/>
        <form className="form" onSubmit={(event) => this.add(event)}>
          <input
            placeholder="Add todo"
            value={this.state.todo.value}
            onChange={this.handleChanges}
            name="todo"
          />
          <button onClick={(event) => this.add(event)}>Add todo</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todosFromRedux: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo, toggle, deleteTodo } // same as { changeTitle: changeTitle }
)(App);
