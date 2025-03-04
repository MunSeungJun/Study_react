import React from 'react'

const Header = ({count}) => {
  return (
    <>
      <h1>Todo List (<span>{count}</span>)</h1>
      <h2>오늘의 할 일</h2>
    </>
  )
}

export default Header