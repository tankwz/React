import React from 'react';
import ReactDOM from 'react-dom/client';
import './darkly.css';
import Header from './Components/Layout/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Layout/Home';
import About from './Components/Layout/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
);
