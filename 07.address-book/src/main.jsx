import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root, { Loader as RootLoader ,
  Action as RootAction } from './routes/root';
import ErrorPage from "./error-page";
import Contact, {
  Loader as ContactLoader,
} from "./routes/contact";
import EditContact,  {
  Action as EditAction,
} from "./routes/edit";
import { Action as DestroyAction } from "./routes/destroy";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: RootLoader,
    action: RootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: ContactLoader
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: ContactLoader,
        action: EditAction
      },
      {
        path: "contacts/:contactId/destroy",
        action: DestroyAction,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
