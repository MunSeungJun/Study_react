import React from "react";
import './TodoList.css'

const TodoList = ({ todos}) => {
  function returnDday(day) {
    return Math.round(new Date(day.end).getTime() - new Date(day.start).getTime()) / (1000*60*60*24)
  }

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.idx} className="item mb-3">
            <div className={todo.category ? `${todo.color} item-body` : 'item-body'}>
              <h2 className="fs-3 mb-2">{todo.title}</h2>
              <p className="text-secondary fs-2">{todo.desc}</p>
            </div>
              <div className="item-footer fs-1"><span>D - {returnDday(todo)} </span></div>
          </li> 
        )
      })}
    </ul>
  );
};

export default TodoList;
