import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);
  const baseUrl = "http://localhost:4000/actors/";

  useEffect(() => {
    fetch(baseUrl)
      .then(r => r.json())
      .then(data => setActors(data))
      .catch(error => console.error(error));
  }, [])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        { actors.map((actor, idx) => (
          <article key = { actor.name }>
            <h2>{ actor.name }</h2>
            <ul>
              { actor.movies.map(movie => (
                <li key = { movie }>{ movie }</li>
              ))
              }
            </ul>
            </article>
        ))
         }
      </main>
    </>
  );
};

export default Actors;
