import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom"
import { router } from "./routing/Router"

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='box-border'>
    <RouterProvider router={router} />
  </div>
)
