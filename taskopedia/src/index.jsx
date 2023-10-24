import ReactDOM from 'react-dom/client';
import './darkly.css';
import Header from './Layout/Header';

import Footer from './Layout/Footer';
import MainBody from './MainBody';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div className="">
    <Header></Header>
    <div className="px-4">
      <MainBody />
    </div>
    <Footer />
  </div>
);
