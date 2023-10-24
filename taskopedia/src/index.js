import ReactDOM from 'react-dom/client';
import './darkly.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

function MainBody() {
  return (
    <div className="container mt-5">
      <p>p tag</p>
      <ul className="list-group ">
        <li className="list-group-item ">item 1</li>
        <li className="list-group-item ">item 2</li>
      </ul>
    </div>
  );
}

root.render(<MainBody />);
