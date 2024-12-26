import React from 'react';
import './App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import India from './pages/India';
import Newworld from './pages/Newworld';
import Pag from './pages/Pag';
import Contact from './pages/Contact';
import Login from './pages/Login';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/india' element = {<India/>}/>
        <Route path='/world' element = {<Newworld/>}/>
        <Route path='/pag' element = {<Pag/>}/>
        <Route path='/contact' element = {<Contact/>}/>
       <Route path='/login' element = {<Login/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;
