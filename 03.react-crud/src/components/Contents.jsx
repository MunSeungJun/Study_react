import React from 'react';
import './Contents.css'

const Contents = ({formData, onSubmit, onChange}) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend></legend>
          <div>
            <input type="text" placeholder="title" name='title' value={formData.title} onChange={onChange} />
          </div>
          <div>
            <input type="text" placeholder="body" name='body' value={formData.body} onChange={onChange} />
          </div>
          <div>
            <input type="submit" value="Create" />
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default Contents;
