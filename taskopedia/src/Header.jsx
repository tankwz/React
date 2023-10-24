function MainHeader() {
  return <h1>Mainhead React</h1>;
}
const subHeaderStyle = {
  color: 'blueviolet',
  backgroundColor: 'lightgray',
};

function SubHeader() {
  return <p style={subHeaderStyle}>Subhead React</p>;
}
export default function Header() {
  return (
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  );
}
