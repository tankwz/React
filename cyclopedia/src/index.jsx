import React from 'react';
import ReactDOM from 'react-dom/client';
import './darkly.css';

import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import ClassBase from './ClassBase';
import ClassBaseFunc from './ClassBaseFunc';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    <Header></Header>
    <div className="row">
      <div className="col-6">
        <span className="h1 text-info text-center ">Class</span>
        <ClassBase />
      </div>
      <div className="col-6">
        <span className="h1 text-info text-center">Func</span>
        <ClassBaseFunc></ClassBaseFunc>
      </div>
    </div>
  </div>
);
