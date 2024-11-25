// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Vocabulary from './pages/vocabulary';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vocabulary" element={<Vocabulary />} />
    </Routes>
  );
}

export default App;