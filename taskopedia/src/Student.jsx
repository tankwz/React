export default function Student(props) {
  return (
    <div className="col-4 p-4 ">
      <div className="row border">
        <div className="col-2">
          <img src={props.img} alt="" className="w-100 py-2" />
        </div>
        {props.Name} <br />
        <div className="col-10">Coding Experience {props.exp}</div>
      </div>
    </div>
  );
}
