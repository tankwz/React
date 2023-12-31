import ReactDOM from 'react-dom/client';
import './darkly.css';
import Header from '../../watchopedia/src/Components/Layout/Header';
import Counter from './Counter';
import MoviePage from './Components/MovieComponents/MoviePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header></Header>
    <div className="row text-center m-2 p-2">
      <Counter></Counter>
      <MoviePage></MoviePage>
    </div>
  </div>
);
