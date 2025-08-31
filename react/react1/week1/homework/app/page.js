import Image from "next/image";
import styles from "./page.module.css";
function Cat() {
  return (
    <>
      <div>Name: "Waffle"</div>
      <div>Age: 2</div>
    </>
  );
}

function Cats() {
  return (
    <>
      <Cat />
      <Cat />
    </>
  );
}

function Greeting() {
  return <h1>Hello, React!</h1>;
}

function Card() {
  return (
    <div>
      <h2>Card Title</h2>
      <p>This is card component</p>
    </div>
  );
}

function Cards() {
  return (
    <>
      <Card />
      <Card />
    </>
  );
}

function Person({ name, age }) {
  if (age > 18) {
    return <div>{name} is an adult.</div>;
  }
  return <div>{name} is a minor.</div>;
}

export default function Home() {
  return (
    <>
      <Cats />
      <Greeting />
      <Card />
      <Cards />
      <Person name="Max" age={10} />
    </>
  );
}
