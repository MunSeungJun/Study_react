import React, { useState, useRef } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(1);
  const [formData, setFormData] = useState({
    category: '',
    color: '',
    title: "",
    desc: "",
    start: "",
    end: "",
  });
  const btnRef = useRef([])

  function handleSubmit(e) {
    e.preventDefault();
    setTodos((prev) => {
      return [...prev, { ...formData, idx: id }];
    });
    setId((i) => i + 1);
    setFormData({
      category:'',
      color: '',
      title: "",
      desc: "",
      start: "",
      end: "",
    });
    // btnRef.current.forEach(v => v.classList.remove('btn-active'))
  }
  function onChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  }
  function onClick(e) {
    // e.target.classList.toggle("btn-active")
    // if(e.target.classList.contains('btn-active') == true){
    // }
    setFormData((prev) => {
      return { ...prev, ['category']: e.target.innerText, ['color']: e.target.dataset.color };
    });
  }
  function onDelete(todoId) {
    setTodos(prev => prev.filter(v => v.idx !== todoId) )
  }

  return (
    <>
      <TodoHeader />
      <TodoInput
        formData={formData}
        btnRef={btnRef}
        onChange={onChange}
        onClick={onClick}
        handleSubmit={handleSubmit}
      />
      <TodoList todos={todos} onDelete={onDelete} />
    </>
  );
};

export default App;
