import logo from '../img/react.png';
function MainHeader() {
  return (
    <div className="container">
      <img src={logo} style={{ backgroundColor: 'gray' }}></img>
      <span className="h2 pt-4 text-white-50">React Course - Tasko</span>
    </div>
  );
}
const subHeaderStyle = {
  color: 'blueviolet',
  backgroundColor: 'lightgray',
};

function SubHeader() {
  return (
    <div className="container">
      <p style={subHeaderStyle}>Subhead React</p>
    </div>
  );
}
export default function Header() {
  return (
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  );
}
