import React from 'react';
import ReactDOM from 'react-dom/client';
import './darkly.css';

import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import ClassBase from './ClassBase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header></Header>
    <ClassBase />
  </div>
);
