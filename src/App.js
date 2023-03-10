
import React from 'react';
import { Routes, Route,BrowserRouter } from "react-router-dom";
import './style.css';
import HomePage from './pages/Home';
import Layout from './component/Layout';
import Login from './pages/Login';
import AirportAvailability from './pages/AirportAvailability';


function App() {
  return (
     <BrowserRouter >
     <Routes>
     <Route path="/" element={<Layout />}>
       <Route index element={<HomePage />} />
       <Route path="results" element={<AirportAvailability />} />
       <Route path="login" element={<Login />} />
       <Route path="*" element={<HomePage />} />
     </Route>
   </Routes>
   </BrowserRouter >
  );
}

export default App;
