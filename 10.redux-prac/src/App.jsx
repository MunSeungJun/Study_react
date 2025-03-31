import React from 'react';
import Counter from './Counter';
import { Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <>
      <h1>Redux 기본 예제</h1>
      <Link to=''>home</Link>
      <Link to='counter'>counter</Link>
      <Routes>
        <Route path='/counter' element={<Counter />}/>
      </Routes>
    </>
  );
};

export default App;
