import React from 'react';
import ReactDOM from 'react-dom/client';
import './darkly.css';

import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header></Header>
    <Footer></Footer>
  </div>
);
