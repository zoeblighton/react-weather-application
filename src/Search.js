import { useState } from "react";
export default function Search() {
  let [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  function updateCity(event) {
    console.log(event.target.value);
    setCity(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={updateCity} />
      <input type="submit" value="Search" />
      <br />
      <h2>It is currently 20°C in {city}.</h2>
    </form>
  );
}
