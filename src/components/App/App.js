import React from 'react';
import { Routes, Route } from 'react-router-dom'; // импортируем Routes
import './App.css';
import Login from '../Login/Login';
import NavLinkMenu from '../NavLinkMenu/NavLinkMenu';
function App() {
  return (
    <div className="App">
      <NavLinkMenu />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;