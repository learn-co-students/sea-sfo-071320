import React, { Component } from 'react';
import Todo from '../components/Todo';

class TodosContainer extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Item</th>
            <th>Complete</th>
            <th>Delete</th>
          </tr>

          {this.props.todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              handleComplete={this.props.handleComplete}
              deleteTask={this.props.deleteTask}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default TodosContainer;
