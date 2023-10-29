import ReactDOM from 'react-dom/client';
import './darkly.css';
import Header from './app/layout/Header';
import DestinationIndex from './app/components/DestinationIndex';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { destinationApi } from './api/destinationApi';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <ApiProvider api={destinationApi}>
      <Header></Header>
      <DestinationIndex></DestinationIndex>
    </ApiProvider>
  </div>
);
