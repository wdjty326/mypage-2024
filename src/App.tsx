import React from 'react';
import logo from './logo.svg';
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home';
import AboutPage from './pages/about';



function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
    </Routes>
  );
}

export default App;
