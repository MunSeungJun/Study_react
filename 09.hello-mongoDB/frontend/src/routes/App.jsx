import React from 'react';
import { Container, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getData, createData } from '../api.js';
import { useLoaderData, Form } from 'react-router-dom';

export async function Loader() {
  return JSON.stringify(await getData());
}

export async function Action({request}) {
  const data = await request.formData()
  createData(data)
  
}
  
  const App = () => {
    const data = JSON.parse(useLoaderData());

  return (
    <>
      <Container>
        <Form method="post" className='border p-3 w-75 mx-auto d-flex flex-column align-items-center'  >
          <div>
            <input type="text" name="title" />
            <input type="text" name="body" />
          </div>
          <div className='d-flex gap-3'>
            <input type="text" name="poster"/>
            <input type="submit" value="등록" />
          </div>
        </Form>
        <ul className="row mt-4">
          {data.map((v, i) => (
            <li key={i} className="col-4">
              <img src={v.poster} alt="" className="img-fluid" />
              <div className='d-flex align-items-center gap-2'>
                <Badge>제목</Badge>
                <span>{v.title}</span>
              </div>
              <p>{v.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default App;
