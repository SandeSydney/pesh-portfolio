import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom"
import { router } from "./routing/Router"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="container mx-auto space-y-10">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
