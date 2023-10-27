import { useState } from 'react';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

const MoviePage = () => {
  const [movieNameState, movieNameEdit] = useState(() => ({
    NameList: ['Harry Potter', 'Die Hard'],
  }));

  const addMovie = (movieName) => {
    movieNameEdit((prevM) => {
      return {
        ...prevM,
        NameList: prevM.NameList.concat([movieName]),
      };
    });
  };

  return (
    <div className="container col-12 col-md-6 my-3 border">
      <AddMovie addMovie={addMovie}></AddMovie>
      <MovieList nameList={movieNameState.NameList}></MovieList>
    </div>
  );
};

export default MoviePage;
