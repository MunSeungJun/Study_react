import React from "react";

const Listitems = (props) => {
  const { todos } = props;
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <a href={`/read/${todo.id}`}>{todo.title}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Listitems;
