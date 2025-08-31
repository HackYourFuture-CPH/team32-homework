export default function Person({ name, age }) {
  if (age > 18) {
    return <div>{name} is an adult.</div>;
  }
  return <div>{name} is a minor.</div>;
}
