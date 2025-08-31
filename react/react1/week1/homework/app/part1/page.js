import Greeting from "./components/Greeting.jsx";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import Person from "./components/Person.jsx";

export default function Home() {
  return (
    <>
      <Greeting />
      <Card />
      <Cards />
      <Person name="Max" age={10} />
    </>
  );
}
