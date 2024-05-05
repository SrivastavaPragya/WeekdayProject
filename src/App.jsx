import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Job from './components/JobDescription/Job';
import "./App.css"
const App = () => {
  return (
    <Router>
   
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/jobDescription' element={<Job/>}/>
        
    
     </Routes>
    
     </Router>
  )
}

export default App
