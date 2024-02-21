import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);
  const baseUrl = "http://localhost:4000/movies/";

  useEffect(() => {
    fetch(baseUrl)
      .then(r => r.json())
      .then(data => setMovies(data))
      .catch(error => console.error(error));
  }, [])
  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        { 
          movies.map(movie => (
            <MovieCard 
            key = { movie.id }
            title = { movie.title }
            >
              <Link 
              to = { "/movie/" + movie.id }
             >View Info</Link>
            </MovieCard>

          ))
        }
      </main>
    </>
  );
};

export default Home;
