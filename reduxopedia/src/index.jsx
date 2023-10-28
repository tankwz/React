import React from 'react';
import ReactDOM from 'react-dom/client';
import './darkly.css';
import Header from './app/layout/Header';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Counter from './app/layout/components/Counter';
import Destination from './app/layout/components/Destination';
import DestinationDetail from './app/layout/components/DestinationDetail';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Header></Header>
    <Counter></Counter>
    <Destination></Destination>
    <DestinationDetail></DestinationDetail>
  </Provider>
);
