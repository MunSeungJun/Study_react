import React, { useState, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Student from './Student';

const Content = () => {
  const [students, setStudents] = useState([
    {
      id: '1',
      name: 'gildong',
      email: 'gildong@gamil.com',
      phone: '010-1234-5678',
    },
  ]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [id, setId] = useState(2);

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
    setId(i => i + 1);
    setFormData({
      name: '',
      email: '',
      phone: '',
    });
    visibleRef.current.classList.add('d-none');
  }
  function onUpdate() {

  }
  function onDelete(i) {
    setStudents(prev => {
      return (
        prev.filter(v => v.id !== i)
      )
    })
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
