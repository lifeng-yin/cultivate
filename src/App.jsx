import React, {useState, useContext} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import logo from './logo.svg';
import Landing from './pages/Landing/Landing'
import Plant from './pages/Plant/Plant';
import Harvest from './pages/Harvest/Harvest';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import SignUp from './pages/Authentication/Signup';
import Login from './pages/Authentication/Login';
import TokenContext from "./pages/Authentication/tokenContext";
import PostsContext from "./pages/Plant/PostsContext";
import FormSubmitted from './pages/FormSubmitted/FormSubmitted.jsx'

function App() {
  const [token, changeToken] = useState(null)
  const tokenCtx = useContext(TokenContext)
  const [posts, changePosts] = useState([])

  return (
    <>
    <TokenContext.Provider value={{token, changeToken}}>
      <PostsContext.Provider value={{posts, changePosts, addPost: post => changePosts([...posts, post])}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route path="/plant" element={<Plant/>}></Route>
          <Route path="/harvest" element={<Harvest />}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path='/formsubmitted' element = {<FormSubmitted/>}></Route>
        </Routes>
      </BrowserRouter>
      </PostsContext.Provider>
    </TokenContext.Provider>
    </>
  );
}

export default App;
