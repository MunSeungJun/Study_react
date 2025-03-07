import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
import Create from './components/Create';
import Update from './components/Update';
import axios from 'axios';
import './components/App.css';

const App = () => {
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('http://localhost:3000/items');
        setItems(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);
  const [mode, setMode] = useState('Welcome');
  const [items, setItems] = useState([]);
  const [idx, setIdx] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    body: '',
  });
  const [select, setSelect] = useState({
    id: '',
    title: '',
    body: '',
  });
  const updateRef = useRef('');

  function onChangeMode(e) {
    e.preventDefault();
    setMode(e.target.dataset.mode);
  }
  function onChange(e) {
    const { name, value } = e.target;
    setFormData(prev => {
      return { ...prev, [name]: value };
    });
  }
  function onCreate(e) {
    e.preventDefault();
    setItems(prev => {
      return [...prev, { ...formData, id: idx }];
    });
    axios
      .post('http://localhost:3000/items', {
        id: `${idx}`,
        title: formData.title,
        body: formData.body,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setIdx(i => i + 1);
    setFormData({
      title: '',
      body: '',
    });
  }
  function onSelect(itemId) {
    updateRef.current.classList.remove('d-none');
    const selected = items.filter(v => v.id === itemId)[0];
    setSelect(prev => {
      return { ...prev, id: selected.id, body: selected.title, title: selected.body };
    });
  }
  function onSelectChange(e) {
    const { name, value } = e.target;
    setSelect(prev => {
      return { ...prev, [name]: value };
    });
  }
  function onUpdate(e) {
    e.preventDefault();
    const updateTitle = e.target.elements['title'].value;
    const UpdateBody = e.target.elements['body'].value;
    setItems(prev => {
      return prev.filter(v => v.id !== select.id);
    });
    setItems(prev => {
      return [...prev, { id: select.id, title: updateTitle, body: UpdateBody }];
    });
    axios
    .put(`http://localhost:3000/items/${select.id}`, {
      title: updateTitle,
      body: UpdateBody
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    setSelect({
      id: '',
      title: '',
      body: '',
    });
    updateRef.current.classList.add('d-none');
  }

  function onDelete(itemId) {
    setItems(prev => {
      return prev.filter(v => v.id !== itemId);
    });
    console.log(itemId);
    axios
    .delete(`http://localhost:3000/items/${itemId}`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <>
      <Header title="WEB" onChangeMode={onChangeMode} />
      <Nav items={items} onChangeMode={onChangeMode} onSelect={onSelect} onDelete={onDelete} />
      <Article select={select} mode={mode} />
      <Create formData={formData} onCreate={onCreate} onChange={onChange} />
      <Update
        updateRef={updateRef}
        select={select}
        onUpdate={onUpdate}
        onSelectChange={onSelectChange}
      />
    </>
  );
};

export default App;
