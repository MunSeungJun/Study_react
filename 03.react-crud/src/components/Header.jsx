import React from 'react'

const Header = ({title, onChangeMode}) => {
  return (
    <h1><a href="/" onClick={onChangeMode} data-mode='Welcome'>{title}</a></h1>
  )
}

export default Header