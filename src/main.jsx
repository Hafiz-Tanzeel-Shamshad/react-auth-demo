import { StrictMode } from 'react'
import {
  RouterProvider,
} from "react-router-dom";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from './routes/route.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
