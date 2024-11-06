import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path:"/",
        element: <App/>,
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
 <RouterProvider router={router}/>
)
