import React from 'react'

const Update = ({ updateRef, select, onUpdate, onSelectChange }) => {

  return (
    <div className='update d-none' ref={updateRef} >
        <form action="" onSubmit={(e) => onUpdate(e)}>
            <fieldset>
                <legend></legend>
                <input type="text" name='title' value={select.title} onChange={onSelectChange} />
                <input type="text" name='body' value={select.body} onChange={onSelectChange}  />
                <input type="submit" value='수정' />
            </fieldset>
        </form>
    </div>
  )
}

export default Update