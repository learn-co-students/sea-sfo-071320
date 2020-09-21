import React, { Component } from 'react';
import Todo from '../components/Todo';

class CompletedTodosContainer extends Component {
  render() {
    return (
      <div>
        <h2>Completed Todos</h2>

        <table>
          <tbody>
            <tr>
              <th>Item</th>
              <th>Undo Complete</th>
            </tr>

            {/* Render your completed todos here */}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CompletedTodosContainer;
