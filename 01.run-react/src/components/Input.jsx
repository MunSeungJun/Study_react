import React, { useState } from "react";

const Input = () => {
  const [todo, setTodo] = useState([]);
  function addTodo(e) {
    setTodo()
  }
  return (
    <>
      <input
        type="text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <input type="submit" value="추가" />
    </>
  );
};

export default Input;
