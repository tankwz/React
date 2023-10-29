import ReactDOM from 'react-dom/client';
import './darkly.css';
import Header from './app/layout/Header';
import DestinationIndex from './app/components/DestinationIndex';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header></Header>
    <DestinationIndex></DestinationIndex>
  </div>
);
