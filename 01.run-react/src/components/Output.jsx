import React from "react";

const Output = ({ todos, handleClick, handleDelete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.idx} id={todo.idx} className="d-flex justify-content-between align-items-center" >
          <div className="d-flex flex-column" >
          {todo.title}
          <span className="date">{todo.date.toLocaleString()}</span> 
          </div>
          <div className="d-flex gap-3">
            {todo.isDone ? <span className="done tag" onClick={()=> handleClick(todo.idx)}>완 료</span> :  <span className="pending tag" onClick={()=> handleClick(todo.idx)}>미완료</span>}
            <button className="btn" onClick={() => handleDelete(todo.idx)}>&times;</button>
          </div>

        </li>
      ))}
    </ul>
  );
};

export default Output;
