import React from 'react';
import './App.css';

import TodoList from "./components/TodoList"

import { connect } from 'react-redux';

import { addTodo } from './actions';

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
    console.log("Hello")
    this.setState({
      todo: {
        value: "",
        completed: false
      }
    });
    console.log("Yo")
  }

  render() {
    return (
      <div className="App">
        {console.log(this.props)}
        <TodoList todos={this.props.todosFromRedux}/>
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
  { addTodo } // same as { changeTitle: changeTitle }
)(App);
