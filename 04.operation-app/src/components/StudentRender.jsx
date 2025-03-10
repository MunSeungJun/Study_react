import React from 'react';
import { Pencil, Trash } from 'react-bootstrap-icons';
import { StudentBtn, SpaceTd } from './Styled';

const StudentRender = ({ students, onUpdate, onDelete }) => {
  

  return students.map(student => {
    return (
      <> 
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.phone}</td>
            <td>
              <StudentBtn type="button" onClick={onUpdate}><Pencil /></StudentBtn>
              <StudentBtn type="button" onClick={() => onDelete(student.id)}><Trash /></StudentBtn>
            </td>
          </tr>
          {/* <tr>
            <SpaceTd></SpaceTd>
          </tr> */}
      </>
    );
  });
};

export default StudentRender;
