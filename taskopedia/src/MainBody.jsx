import Student from './Student';
const whatWeWillLearn = 'React JS';

let lectureCount = 3;
export default function MainBody() {
  return (
    <div className="container mt-5" style={{ minHeight: '70vh' }}>
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
      <div className="">
        <div className=" container">Student Enrolled</div>
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
      </div>
    </div>
  );
}
