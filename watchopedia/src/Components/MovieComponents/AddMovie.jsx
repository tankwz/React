import { useState } from 'react';

const AddMovie = (props) => {
  const [movieNameState, movieNameEdit] = useState(() => ({
    MovieName: '',
  }));
  const submit = (e, props) => {
    e.preventDefault();
    props.addMovie(movieNameState.MovieName);
  };

  return (
    <form action="" onSubmit={(e) => submit(e, props)}>
      <div className="row">
        <div className="col-12 py-1 h4 text-success ">Add Movie</div>
        <div className="col-8 offset-1">
          <input
            className="form-control "
            type="text"
            placeholder="Movie Name"
            value={movieNameState.MovieName}
            onChange={(e) => {
              movieNameEdit((prevM) => ({
                ...prevM,
                MovieName: e.target.value,
              }));
            }}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success  form-control">Add</button>
        </div>
        <hr className="mt-3" />
      </div>
    </form>
  );
};

export default AddMovie;
