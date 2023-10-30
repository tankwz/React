import ReactDOM from 'react-dom/client';
import './darkly.css';
import Header from './app/layout/Header';
import DestinationIndex from './app/components/DestinationIndex';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { Provider } from 'react-redux';
import { destinationApi } from './api/destinationApi';
import { store } from './store/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Provider store={store}>
      <Header></Header>
      <DestinationIndex></DestinationIndex>
    </Provider>
  </div>
);
