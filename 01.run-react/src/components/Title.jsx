import React, { useState } from "react";
import Input from "./Input";
import Output from "./Output";

const Title = () => {
  const [todos, setTodos] = useState([]);
  const [todoTitle, settodoTitle] = useState("");
  const [todoId, settodoID] = useState(1);

  function onChangeInput(e) {
    settodoTitle(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setTodos((prev) => {
      return [
        ...prev,
        { idx: todoId, title: todoTitle, isDone: false, date: new Date() },
      ];
    });
    settodoID((i) => i + 1);
    settodoTitle("");
  }
  function handleClick(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.idx === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  }
  function handleDelete(id) {
    setTodos((prev) => {
      return prev.filter((v) => v.idx !== id);
    });
    settodoID(i => i - 1)
    // setTodos((prev) => {
    //   prev.map(todo => ({ ...todo, idx: todo.id - 1 }) )
    // })
  }
  return (
    <>
      <Input
        handleSubmit={handleSubmit}
        onChangeInput={onChangeInput}
        todoTitle={todoTitle}
      />
      <Output
        todos={todos}
        handleClick={handleClick}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default Title;
