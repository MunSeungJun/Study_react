import React, { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputId, setInputId] = useState(1);
  const [todoTitle, setTodoTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  function onTitleChange(t) {
    setTodoTitle(t);
  }
  function onDescriptionChange(d) {
    setDescription(d);
  }
  function onStartChange(start) {
    setStartDate(start);
  }
  function onEndChange(end) {
    setEndDate(end);
    console.log(endDate);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setTodos((prev) => {
      return [
        ...prev,
        { idx: inputId, title: todoTitle, start: startDate, end: endDate },
      ];
    });
    setInputId((i) => i + 1);
    setTodoTitle("");
    setDescription("");
    setStartDate("");
    setEndDate("");
  }

  return (
    <>
      <TodoHeader />
      <TodoInput
        title={todoTitle}
        description={description}
        startDate={startDate}
        endDate={endDate}
        onTitleChange={onTitleChange}
        onDescriptionChange={onDescriptionChange}
        onStartChange={onStartChange}
        onEndChange={onEndChange}
        handleSubmit={handleSubmit}
      />
      <TodoList todos={todos} />
    </>
  );
};

export default App;
