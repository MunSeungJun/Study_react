import React from 'react';
import { Pencil, Trash} from 'react-bootstrap-icons'

const Student = ({ formData, students, visibleRef, showCreate, hideCreate, onChange, onCreate, onUpdate, onDelete }) => {
  return (
    <div className='student'>
      <div className='student-header'>Student</div>
      <div className='student-body'>
        <div>
          Studnets List <span><button onClick={showCreate}>add new student</button></span>
        </div>
        <div>
          <form onSubmit={onCreate} onReset={hideCreate} autoComplete='off'>
            <table>
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
                {
                  students.map(student => {
                    return (
                      <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.phone}</td>
                        <td>
                          <button type='button' onClick={onUpdate}><Pencil/></button>
                          <button type='button' onClick={() => onDelete(student.id)}><Trash/></button>
                        </td>
                      </tr>
                    )
                  })
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