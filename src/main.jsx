import React from 'react'
import ReactDOM from 'react-dom/client'


import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PlantaRC from './view/plantaRC/PlantaRC.jsx';
import Home from './view/home/Home.jsx';

const rotas = createBrowserRouter([
  {
    path: "/",
    element:   <Home />,
  },
 {
    path: "/plantaRC",
    element:   <PlantaRC />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
   
   <RouterProvider router={rotas} />
  
  </React.StrictMode>,
)
