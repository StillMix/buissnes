import React from 'react';
import { Routes, Route } from 'react-router-dom'; // импортируем Routes
import './App.css';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Marked from '../Marked/Marked';
import Staff from '../Staff/Staff';
import Report from '../Report/Report';
import AddUser from '../AddUser/AddUser';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/staff" element={<Staff/>} />
          <Route path="/report" element={<Report />} />
          <Route path="/marked" element={<Marked />} />
          <Route path="/adduser" element={<AddUser />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
