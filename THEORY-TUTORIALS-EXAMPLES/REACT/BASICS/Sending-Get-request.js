import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  function fetchMoviesHandler() {
    fetch("https://swapi.dev/api/films")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl
          };
        });
        setMovies(transformedMovies);
      });
  }
  return (
    <>
      <section>
        <button>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </>
  );
}
