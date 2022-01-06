// import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

//pages
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<SearchPage/>}/>
          <Route path="/dashboard" element={<DashboardPage/>}/>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
