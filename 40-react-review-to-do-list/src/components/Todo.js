import React from 'react';

const Todo = (props) => (
  <tr>
    <td>{props.todo.content}</td>
    <td>
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => props.handleComplete(props.todo)}
      />
    </td>
    <td>
      <button onClick={() => props.deleteTask(props.todo)}>Delete</button>
    </td>
  </tr>
);

export default Todo;
