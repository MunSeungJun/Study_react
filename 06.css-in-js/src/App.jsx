import React from 'react'
import styled from 'styled-components'
import './App.scss'

const SimpleButton = styled.button`
color: white;
background-color: green`

const LargeButton = styled(SimpleButton)`
font-size: 50px;
`
const ReactButton = (props) => {
    return (
        <button>{props.children}</button>
    )
}
const PrimaryButton = styled.button`
color: ${(props) => {
    return (props.primary ? 'white' : 'blue')
        
    }
}};`

const App = () => {
  return (
    <>
    <h1>hello</h1>
        <div>
            <SimpleButton>Simple</SimpleButton>
            <LargeButton>Large</LargeButton>
        </div>
        <ReactButton >리액트</ReactButton>
        <div>
            <PrimaryButton primary>normal</PrimaryButton>
        </div>
    </>
  )
}

export default App