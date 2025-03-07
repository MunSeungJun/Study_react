import React from 'react';
import './Create.css'

const Create = ({formData, onCreate, onChange}) => {
  return (
    <>
      <form onSubmit={onCreate}>
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

export default Create;
