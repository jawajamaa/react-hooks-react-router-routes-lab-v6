import NavBar from "../components/NavBar";
import PersonsList from "../components/PersonsList";

function Directors() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        <PersonsList url="directors" />
      </main>
    </>
  );
};

export default Directors;
