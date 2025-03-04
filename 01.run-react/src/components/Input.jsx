import React from 'react'

const Input = ({handleSubmit, onChangeInput, todoTitle}) => {
  return (
    <form onSubmit={handleSubmit} className='d-flex justify-content-between gap-3'>
        <input type="text" value={todoTitle} onChange={onChangeInput} className='flex-1' placeholder='추가할 할 일을 입력하세요' />
        <input type="submit" value="추가" />
      </form>
  )
}

export default Input