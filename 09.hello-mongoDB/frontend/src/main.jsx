import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App, { Loader as AppLoader, Action as AppAction} from './routes/App.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    loader:AppLoader,
    action:AppAction
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
