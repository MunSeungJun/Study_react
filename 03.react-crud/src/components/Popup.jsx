import React from 'react'

const Popup = ({popupRef, updateData, onUpdateChange, onUpdateSubmit}) => {
  return (
    <div className='update d-none' ref={popupRef}>
        <form action="" onSubmit={(e) => onUpdateSubmit(e, updateData.idx)}>
            <fieldset>
                <legend></legend>
                <input type="text" name='title' value={updateData.title} onChange={onUpdateChange} />
                <input type="text" name='body' value={updateData.body} onChange={onUpdateChange} />
                <input type="submit" value='수정' />
            </fieldset>
        </form>
    </div>
  )
}

export default Popup