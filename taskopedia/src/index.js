import ReactDOM from 'react-dom/client';
import './darkly.css';
import Header from './Header';
import Student from './Student';
const root = ReactDOM.createRoot(document.getElementById('root'));
function Footer() {
  return <p style={{ color: 'gray', backgroundColor: 'black' }}>w</p>;
}

const whatWeWillLearn = 'React JS';
let lectureCount = 3;
function MainBody() {
  return (
    <div className="container mt-5">
      <p>
        {whatWeWillLearn} content
        <br /> Total Lecture - {lectureCount}
      </p>
      <ul className="list-group ">
        <li className="list-group-item ">Basic Foundation</li>
        <li className="list-group-item ">Functional and Class Components</li>
      </ul>
      <div>
        Enter Task:{' '}
        <input
          type="text"
          maxLength={5}
          readOnly={false}
          placeholder="holding"
        />{' '}
      </div>
    </div>
  );
}

root.render(
  <div className="container">
    <Header></Header>
    <MainBody />
    <div className="row">Student Enrolled</div>
    <Student
      exp={2}
      Name="Kris Wallet"
      img="https://api.lorem.space/image/game?w=149&h=100"
    />
    <Student
      exp={5}
      Name="Angle Patrice"
      img="https://api.lorem.space/image/game?w=153&h=100"
    />
    <Student
      exp={7}
      Name="Rene Parker"
      img="https://api.lorem.space/image/game?w=150&h=100"
    />

    <Footer />
  </div>
);
