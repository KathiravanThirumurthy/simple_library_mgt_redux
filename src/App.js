import React from 'react'
//import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Library from './pages/Library';
import Navigation from './components/Navigation';


const router = createBrowserRouter([
  { path: '/', element:  <Home />  },
  { path: '/library', element: <Library /> },
]);

const App = () => {
  return (
    <div>
   
    <RouterProvider router={router} />
    </div>
   
  )
}
export default App
