import React, { Component } from 'react';
import Todo from '../components/Todo';

class CompletedTodosContainer extends Component {
  displayTodos = () => {
    return this.props.todos.map((todo) => (
      <Todo
        key={todo.id}
        todo={todo}
        handleComplete={this.props.handleComplete}
        deleteTask={this.props.deleteTask}
      />
    ));
  };

  render() {
    return (
      <div>
        <h2>Completed Todos</h2>

        <table>
          <tbody>
            <tr>
              <th>Item</th>
              <th>Undo Complete</th>
              <th>Delete</th>
            </tr>

            {this.displayTodos()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CompletedTodosContainer;
