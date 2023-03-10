
import React, { useState } from 'react';
import { Routes, Route,BrowserRouter } from "react-router-dom";
import './style.css';
import HomePage from './pages/Home';
import Layout from './component/Layout';
import Login from './pages/Login';
import AirportAvailability from './pages/AirportAvailability';
import DemoContext from './DemoContext';


function App() {
  const [user, setUser]=useState({name:'',email:''})
  return (
    <DemoContext.Provider value={{user,setUser}}>
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
   </DemoContext.Provider>
  );
}

export default App;
