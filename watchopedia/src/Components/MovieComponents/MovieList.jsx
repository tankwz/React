const MovieList = (props) => {
  return (
    <ul className="list-group list-group-numbered mb-3">
      {props.nameList.map((item, index) => {
        return (
          <li className="list-group-item" key={index}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
