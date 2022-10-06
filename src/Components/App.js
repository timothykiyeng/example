import React, { useEffect, useState } from "react";
import AddMovie from "./AddMovie";
import Movie from "./Movie/Movie";
import Search from "./Search";


function App() {

  const [search, setSearch] = useState('');
  const [movieData, setMovieData] = useState([]);

  //console.log(movieData);
  console.log(search)
  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((res) => res.json())
      .then((movieData) => {
        setMovieData(movieData)
      })
  }, []);

  const searchMovie = (e) => {
    setSearch(e.target.value);
  }

  const displayMovieItems = movieData.filter((movie) =>
    movie.name.includes(search)
  
  )

  console.log(displayMovieItems);

  return (
    <>
      <Search search={search} onSearchChange={searchMovie} />
      <br></br>
      <AddMovie />
      <br></br>
      <div className="movie-container">
        {movieData.map((displayMovieItem) => (
          <Movie key={displayMovieItem.id}  displayMovieItems={displayMovieItem} />
        ))}
      </div>
    </>
  );
}

export default App;
