import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './Router.jsx'
import BookProvider from './BookContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router}></RouterProvider>
    </BookProvider>
  </StrictMode>,
)
