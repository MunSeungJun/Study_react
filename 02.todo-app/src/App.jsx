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
  const colorRef = useRef([])

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
    btnRef.current.forEach(v => v.classList.remove('btn-color'))
  }
  function onChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  }
  function onClick(e) {
    e.target.classList.toggle("btn-color")
    if(e.target.classList.contains('btn-color') == true){
      setFormData((prev) => {
        return { ...prev, ['category']: e.target.innerText, ['color']: e.target.dataset.color };
      });
    }

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
      <TodoList todos={todos} colorRef={colorRef} />
    </>
  );
};

export default App;
