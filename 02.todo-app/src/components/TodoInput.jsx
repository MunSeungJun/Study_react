import React from "react";
import './TodoInput.css'

const TodoInput = ({formData, btnRef, onChange, onClick, handleSubmit}) => {
  return (
    <>
    
    <form id="input_form" className="mt-3" onSubmit={handleSubmit}>
      <fieldset>
        <legend></legend>
        <div className="d-flex flex-column gap-3">
        <div className="d-flex justify-content-center gap-2">
            <button type="button" className={formData.color == 'cat-etc' ? `catBtn btn-active` : 'catBtn'} data-color='cat-etc' ref={el => btnRef.current[0] = el} onClick={onClick}>etc</button>
            <button type="button" className={formData.color == 'cat-meet' ? `catBtn btn-active` : 'catBtn'} data-color='cat-meet' ref={el => btnRef.current[1] = el} onClick={onClick}>meeting</button>
            <button type="button" className={formData.color == 'cat-free' ? `catBtn btn-active` : 'catBtn'} data-color='cat-free' ref={el => btnRef.current[2] = el} onClick={onClick}>free time</button>
            <button type="button" className={formData.color == 'cat-travel' ? `catBtn btn-active` : 'catBtn'} data-color='cat-travel' ref={el => btnRef.current[3] = el} onClick={onClick}>travel</button>
          </div>        
          <div className="d-flex flex-column gap-2">
            <input type="text" placeholder="Task Title" name="title" value={formData.title} onChange={onChange} />
            <input type="text" placeholder="Add a description" name="desc" value={formData.desc} onChange={onChange} />
          </div>
          <div className="d-flex  gap-5">
            <div className="d-flex flex-column flex-1">
                <label htmlFor="start-date">시작일</label>
                <input type="date" id="start-date" name="start" value={formData.start} onChange={onChange} />
            </div>
            <div className="d-flex flex-column flex-1">
                <label htmlFor="end-date">종료일</label>
                <input type="date" id="end-date" name="end" value={formData.end} onChange={onChange}/>
            </div>
          </div>
          <input type="submit" className="btn btn-active" value="등록"  />
        </div>
      </fieldset>
    </form>
    </>
  );
};

export default TodoInput;
