import React from 'react';
import StudentRender from './StudentRender';
import { SpaceTd } from './Styled';
import './Student.css'


const Student = ({ formData, students, visibleRef, showCreate, hideCreate, onChange, onCreate, onUpdate, onDelete }) => {

  
  return (
    <div className='student'>
      <div className='student-header'>Student</div>
      <div className='student-body'>
        <div className='student-body-title'>
          Students List <span><button onClick={showCreate}>add new student</button></span>
        </div>
        <div className='student-body-content'>
          <form onSubmit={onCreate} onReset={hideCreate} autoComplete='off'>
            <table className='student-tbl'>
              <thead>
                <tr>
                  <th>name</th>
                  <th>email</th>
                  <th>phone</th>
                </tr>
              </thead>
              <tbody>
                <tr ref={visibleRef} className='d-none'>
                  <td><input type="text" name='name' value={formData.name} onChange={onChange} /></td>
                  <td><input type="text" name='email' value={formData.email} onChange={onChange} /></td>
                  <td><input type="text" name='phone' value={formData.phone} onChange={onChange} /></td>
                  <td>
                    <input type="submit" value='추가' />
                    <input type="reset" value='취소' />
                  </td>
                </tr>
                <tr>
                  <SpaceTd></SpaceTd>
                </tr>
                {
                  <StudentRender  students={students} onUpdate={onUpdate} onDelete={onDelete}></StudentRender>
                }
                </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Student;