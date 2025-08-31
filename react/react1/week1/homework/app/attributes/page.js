"use client";
export default function Page() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return <input value="Max" onChange={handleChange}></input>;
}
