import React from 'react'
import ReactDOM from 'react-dom/client'
import Root, {loader as rootLoader, action as rootAction,} from "./routes/root"

import{
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css'
//import Root from './routes/root';
import ErrorPage from './error-page';
import EditContact,{action as editAction,} from './routes/edit';
import Contact,{loader as contactLoader, action as contactAction,} from './routes/contact';
import {action as destroyAction} from "./routes/destroy";
import Index from './routes';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    loader:rootLoader,
    action: rootAction,
    children:[
  {index: true, element:<Index/>},
  {
    path: "contacts/:contactId",
    element: <Contact/>,
    loader: contactLoader,
    action: contactAction,
  },
  {
    path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
  },
  {
    path:"contacts/:contactId/destroy",
    action: destroyAction,
    errorElement: <div>Oops! there was an error.</div>,
  },
 ],
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
