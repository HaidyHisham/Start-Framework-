import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Home from './Components/Home/Home'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import About from './Components/About/About';
import Layout from './Components/Layout/Layout';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Notfound from './Components/Notfound/Notfound';


const router = createBrowserRouter([
  {path:"",element:<Layout/>,
    children:[
    {index:true,element:<Home/>},
    {path:"about",element:<About/>},
    {path:"portfolio",element:<Portfolio/>},
    {path:"contact",element:<Contact/>},
    {path:"*",element:<Notfound/>},
  ],},
]);
 
function App() {
  return (
    <div className="App">
     
      <RouterProvider router={router}> </RouterProvider>
     
    </div>
  );
}

 
export default App;
