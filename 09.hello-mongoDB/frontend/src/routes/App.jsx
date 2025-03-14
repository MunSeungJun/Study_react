import React from 'react'
import { Container} from 'react-bootstrap'
import { getData } from '../api.js'
import { useLoaderData, Form } from 'react-router-dom'

export async function Loader() {
  return JSON.stringify(await getData())
}



const App = () => {
  const datas = useLoaderData()
  const data = JSON.parse(datas) 
  
  return (
    <>
    <Container>
      <Form method='post'>
        <input type="text" />
        <input type="submit" />
      </Form>
      <ul>
        {
          data.map(v => (
            <li>{v.title} <span>{v.body}</span></li>
          ))
        }
      </ul>
    </Container>
    </>
  )
}

export default App