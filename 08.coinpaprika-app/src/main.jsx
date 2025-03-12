import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Root from './routes/Root'
import Home, {Loader as HomeLoader} from './routes/Home'
import News from './routes/News'
import HeadLine, {Loader as HeadLineLoader} from './routes/Headline'
import { Flash } from './routes/Flash'
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
        // index:true,
        loader: HomeLoader
      },
      {
        path:'news',
        element: <News/>,
        children:[
          {
            path:'headline',
            element:<HeadLine/>,
            loader: HeadLineLoader
        },
        {
          path:'flash',
          element:<Flash/>,
          index: true
        }
      ]
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
