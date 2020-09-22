import React from 'react';
const NewTodoForm = (props) => (
  <form onSubmit={props.handleFormSubmit}>
    <input
      onChange={props.changeHandler}
      type="text"
      placeholder="Todo Content"
      value={props.newTodo}
    />
    <input type="Submit" />
  </form>
);
export default NewTodoForm;
