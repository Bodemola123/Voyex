import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import './styles/fonts.css'; 
import Root from '../src/routes/root'
import Page2 from '../src/routes/Page2'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/> ,
  },
  {
    path: "/Page2",
    element: <Page2/> ,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
