import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Login from "./routes/Login";
import OfferManager from './routes/OfferManager';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<OfferManager/>} />
    </Routes>
  );
}

export default App;
