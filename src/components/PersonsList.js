import { useEffect, useState } from "react";

function PersonsList({ url }) {
    const [persons, setPersons] = useState([]);
    const baseUrl = `http://localhost:4000/${url}/`;

    useEffect(() => {
        fetch(baseUrl)
          .then(r => r.json())
          .then(data => setPersons(data))
          .catch(error => console.error(error));
      }, [])

    return (
        <>{ persons.map(person => (
            <article key = { person.name }>
              <h2>{ person.name }</h2>
              <ul>
                { person.movies.map(movie => (
                  <li key = { movie }>{ movie }</li>
                ))
                }
              </ul>
              </article>
          ))
           }
        </>
    )
}

export default PersonsList;
