import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const[movie, setMovie] = useState({});
  const params = useParams();
  const movieId = params.id;
  const baseUrl = "http://localhost:4000/movies/";

  useEffect(() => {
    fetch(baseUrl + `${movieId}`)
      .then(r => r.json())
      .then(data => setMovie(data))
      .catch(error => console.error(error))
  }, [movieId]);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{ movie.title }</h1>
        <p>Running Time: { movie.time }</p>
        <p>Genres: { (movie.genres || []).map((genre, idx) => (
          <span key={ idx }>{ genre }</span>
        )) }
        </p>
      </main>
    </>
  );
};

export default Movie;
