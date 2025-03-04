import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import "./App.css"

const App = () => {
  const [todos, setTodos] = useState([]);
  // fetch("https://jsonplaceholder.typicode.com/todos")
  //   .then((response) => response.json())
  //   .then((json) => setTodos(json));
  useEffect(function() {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const jsonData = await response.json();
    setTodos(jsonData);
  }

  return (
    <>
      <Header count={todos.length} />
      <Title />
    </>
  );
};

export default App;
