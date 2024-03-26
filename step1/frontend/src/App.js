import React from 'react';
import './App.css' 
import Navbar from './components/Navbar';
import Home from './components/Home';
import Routes1 from './components/Routes/Routes1';
import Routes2 from "./components/Routes/Routes2";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
function App() {
  return (
    <div className="container-fluid  App "  style={{ height: "100vh" }}>
   <BrowserRouter>
  
   <Routes1/>
   </BrowserRouter>
 </div>
  );
}

export default App;