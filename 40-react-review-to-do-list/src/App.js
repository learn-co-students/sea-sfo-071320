import React, { Component } from 'react';
import './App.css';
import TodosContainer from './containers/TodosContainer';
// import CompletedToDosContainer from './containers/CompletedTodosContainer';
// import NewTodoForm from './components/NewTodoForm';

const ENDPOINT = 'http://localhost:6001/todos';

class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    fetch(ENDPOINT)
      .then((resp) => resp.json())
      .then((todos) => {
        this.setState({ todos: todos });
      });
  }

  handleComplete = (todo) => {
    const id = todo.id;
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));

    this.patchCompleted(todo);
  };

  patchCompleted = (todo) => {
    let data = { completed: !todo.completed };
    fetch(ENDPOINT + `/${todo.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };

  deleteTask = (todo) => {
    console.log(todo);
    const id = todo.id;
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));

    fetch(ENDPOINT + `/${id}`, { method: 'DELETE' });
  };

  render() {
    return (
      <div className="App">
        <h1 className="title">To Do List</h1>
        <h4>Let's be Productive!</h4>
        {/* <NewTodoForm /> */}

        <TodosContainer
          todos={this.state.todos}
          handleComplete={this.handleComplete}
          deleteTask={this.deleteTask}
        />

        {/* <CompletedToDosContainer /> */}
      </div>
    );
  }
}

export default App;
