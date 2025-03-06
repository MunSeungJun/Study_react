import React, { useState, useRef } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
import Contents from './components/Contents';
import Lists from './components/Lists';
import Popup from './components/Popup';
import './components/App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [id, setId] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    body: '',
  });
  const popupRef = useRef('')
  const [updateData, setupdateData] = useState({
    idx:'',
    body:'',
    title: ''
  })

  function onChange(e) {
    const { name, value } = e.target;
    setFormData(prev => {
      return { ...prev, [name]: value };
    });
  }
  function onSubmit(e) {
    e.preventDefault();
    setItems(prev => {
      return [...prev, { ...formData, idx: id }];
    });
    setId(i => i + 1);
    setFormData({
      title: '',
      body: '',
    });
  }
  function onUpdate(itemId) {
    popupRef.current.classList.remove('d-none')
    setupdateData(prev => {
      return (
        {...prev, idx: (items.filter(v => v.idx == itemId)[0]).idx, title:(items.filter(v => v.idx == itemId)[0]).title, body:(items.filter(v => v.idx == itemId)[0]).body  }
      )
    }) 

   
  }
  function onUpdateChange(e) {
    const {name, value} = e.target
    setupdateData(prev => {
      return (
        {...prev, [name]: value}
      )
    })

  }
  function onUpdateSubmit(e, itemId) {
    e.preventDefault()
    setItems(prev => {
      return (
        [...(prev.filter(v => v.idx == itemId)), {title:updateData.title, body:updateData.body}]
      )
    })
    popupRef.current.classList.add('d-none')
  }
  function onDelete(itemId) {
    setItems(prev => {
      return prev.filter(v => v.idx !== itemId)
    });
  }
  return (
    
    <>
      <Header title="WEB" />
      <Nav />
      <Article />
      <Contents formData={formData} onSubmit={onSubmit} onChange={onChange} />
      <Lists items={items} onUpdate={onUpdate}  onDelete={onDelete} />
      <Popup popupRef={popupRef} updateData={updateData} onUpdateChange={onUpdateChange} onUpdateSubmit={onUpdateSubmit} />
    </>
  );
};

export default App;
