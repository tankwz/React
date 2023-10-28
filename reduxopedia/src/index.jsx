import React from 'react';
import ReactDOM from 'react-dom/client';
import './darkly.css';
import Header from './app/layout/Header';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Counter from './app/layout/components/Counter';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Header></Header>
    <Counter></Counter>
  </Provider>
);
