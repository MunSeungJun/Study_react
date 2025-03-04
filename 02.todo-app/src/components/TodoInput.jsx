import React from "react";

const TodoInput = ({title, description, startDate, endDate, onTitleChange, onDescriptionChange, onStartChange, onEndChange, handleSubmit}) => {
  return (
    <form id="input_form" onSubmit={handleSubmit}>
      <fieldset>
        <legend></legend>
        <div className="d-flex flex-column gap-2">
          <input type="text" placeholder="Task Title" value={title} onChange={(e) => onTitleChange(e.target.value)} />
          <input type="text" placeholder="Add a description" value={description} onChange={(e) => onDescriptionChange(e.target.value)} />
          <div className="d-flex  gap-5">
            <div className="d-flex flex-column flex-1">
                <label htmlFor="start-date">시작일</label>
                <input type="date" id="start-date" value={startDate} onChange={(e) => onStartChange(e.target.value)} />
            </div>
            <div className="d-flex flex-column flex-1">
                <label htmlFor="end-date">종료일</label>
                <input type="date" id="end-date" value={endDate} onChange={(e) => onEndChange(e.target.value)}/>
            </div>
          </div>
          <input type="submit" className="btn" value="등록"  />
        </div>
      </fieldset>
    </form>
  );
};

export default TodoInput;
