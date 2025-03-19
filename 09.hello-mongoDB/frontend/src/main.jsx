import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './routes/App.jsx';
import List, { Loader as ListLoader } from './routes/List.jsx';
import Add, { Action as AddAction } from './routes/Add.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/list',
    element: <List />,
    loader: ListLoader,
  },
  {
    path:'/add',
    element:<Add/>,
    action: AddAction
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
