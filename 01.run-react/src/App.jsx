import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Input from "./components/Input";

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
      <Footer />
      <Input />
      <Header count={todos.length} />
      <Content todos={todos} />
    </>
  );
};

export default App;
