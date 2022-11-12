import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import Home from './pages/Home/Home'
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
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/plant" element={<Plant />}></Route>
          <Route path="/harvest" element={<Harvest />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
