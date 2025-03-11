import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Root from './routes/Root'
import Home, {Loader as HomeLoader} from './routes/Home'
import ErrorPage from './ErrorPage'
import './index.css'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:'home',
        element: <Home/>,
        loader: HomeLoader
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
