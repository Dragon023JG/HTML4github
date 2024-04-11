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
import EditContact from './routes/edit';
import Contact,{loader as contactLoader,} from './routes/contact';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    loader:rootLoader,
    action: rootAction,
    children:[
  {
    path: "contacts/:contactId",
    element: <Contact/>,
    loader: contactLoader,
  },
  {
    path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
  },
 ],
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)