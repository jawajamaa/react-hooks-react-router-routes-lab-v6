import NavBar from "../components/NavBar";
import PersonsList from "../components/PersonsList";

function Actors() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        <PersonsList url="actors" />
      </main>
    </>
  );
};

export default Actors;
