import React from 'react';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router'
import './App.css'

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      home...
    </div>
  );
};
const Topics = () => {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li><NavLink to='/topics/1'>html</NavLink></li>
        <li><NavLink to='/topics/2'>css</NavLink></li>
        <li><NavLink to='/topics/3'>js</NavLink></li>
      </ul>
      <Routes>
        <Route path='/1' element={'html...'}></Route>
        <Route path='/2' element={'css'}></Route>
        <Route path='/3' element={'js'}></Route>
      </Routes>
    </div>
  );
};
const Contact = () => {
  return (
    <div> 
      <h2>Contact</h2>
      contact...
    </div>
  );
};
const NotFound = () => {
    return (
        <div>
            <h2>not found</h2>
            not found...
        </div>
    )
}

const App = () => {
  return (
    <>
      <BrowserRouter>
          <h1>react-router-dom</h1>
          <ol>
              <li>
                  <NavLink to='/'>홈{' '}</NavLink>
              </li>
              <li>
                  <NavLink to='topics'>토픽{' '}</NavLink>
              </li>
              <li>
                  <NavLink to='contact'>컨택</NavLink>
              </li>
          </ol>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/topics/*' element={<Topics/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/*' element={<NotFound/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
