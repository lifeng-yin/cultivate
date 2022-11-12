import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import Landing from './pages/Landing/Landing'
import Plant from './pages/Plant/Plant';
import Harvest from './pages/Harvest/Harvest';
import Navbar from './components/Navbar/Navbar';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route path="/plant" element={<Plant />}></Route>
          <Route path="/harvest" element={<Harvest />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
