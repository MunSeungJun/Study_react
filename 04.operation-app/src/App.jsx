import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Header from './components/Header'
import Content from './components/Content'
import './App.css'

const App = () => {

  return (
    <>
      <div className='container'>
        <BrowserRouter>
          <Header/>
          <Content/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App 