import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import Student from './Student';

const Content = () => {
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('http://localhost:3000/students');
        setStudents(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [id, setId] = useState(1);

  const visibleRef = useRef();

  function showCreate() {
    visibleRef.current.classList.remove('d-none');
  }
  function hideCreate() {
    setFormData({
      name: '',
      email: '',
      phone: '',
    });
    visibleRef.current.classList.add('d-none');
  }
  function onChange(e) {
    const { name, value } = e.target;
    setFormData(prev => {
      return { ...prev, [name]: value };
    });
  }
  function onCreate(e) {
    e.preventDefault();
    setStudents(prev => {
      return [
        ...prev,
        { id: id, name: formData.name, email: formData.email, phone: formData.phone },
      ];
    });
    axios
      .post('http://localhost:3000/students', {
        id: `${id}`,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setId(i => i + 1);
    setFormData({
      name: '',
      email: '',
      phone: '',
    });
    visibleRef.current.classList.add('d-none');
  }
  function onUpdate() {}
  function onDelete(i) {
    setStudents(prev => {
      return prev.filter(v => v.id !== i);
    });
    axios
      .delete(`http://localhost:3000/students/${i}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/student"
        element={
          <Student
            formData={formData}
            students={students}
            visibleRef={visibleRef}
            showCreate={showCreate}
            hideCreate={hideCreate}
            onChange={onChange}
            onCreate={onCreate}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        }
      ></Route>
    </Routes>
  );
};

export default Content;
