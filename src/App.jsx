import { useState } from 'react'
import Login from './login';
import Dashboard from "./Dashboard";
import Registration from "./register";
import { BrowserRouter } from 'react-router-dom';
import './App.css'



function App() {
  

  return (
   <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Registration/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
   </Routes>
  );

}
export default App
