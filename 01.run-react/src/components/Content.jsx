import React from 'react'
import Listitems from './Listitems'

const Content = (props) => {
  const {todos} = props
  return (
    <main>
        <Listitems todos={todos} />
    </main>
  )
}

export default Content