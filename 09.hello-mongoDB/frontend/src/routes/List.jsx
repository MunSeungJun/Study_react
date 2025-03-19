import React from 'react'
import { Container, Table, Row, Col } from 'react-bootstrap';
import { getData } from '../api.js';
import { useLoaderData } from 'react-router-dom';

export async function Loader() {
    return JSON.stringify(await getData());
  }

const List = () => {
    const data = JSON.parse(useLoaderData());
  return (
    <>
      <Container>
        <Row>
          <Col>
          <h1 className='text-center fs-2 mb-3'>사원</h1>
            <Table striped bordered hover size='sm'>
              <thead>
                <tr className='text-center'>
                  <th>사번</th>
                  <th>이름</th>
                  <th>이메일</th>
                  <th>전화번호</th>
                  <th>급여</th>
                  <th>커미션</th>
                  <th>관리자</th>
                </tr>
              </thead>
              <tbody>
                {data.map((v, i) => (
                  <tr key={i}>
                    <td className='text-end'>{v.employee_id}</td>
                    <td>{v.first_name}{' '}{v.last_name}</td>
                    <td>{v.email}</td>
                    <td>{v.phone_number}</td>
                    <td className='text-end'>{v.salary}</td>
                    <td className='text-end'>{v.commission_pct ? v.commission_pct : '-'}</td>
                    <td className='text-end'>{v.manger_id ? v.manger_id : '-'}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>

  )
}

export default List