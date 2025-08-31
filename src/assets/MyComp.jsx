import React, { useState } from "react";

export default function MyComp() {
  let [name, setName] = useState("Guest");
  let [age, setAge] = useState(0);
  let [Working, setWokring] = useState(false);

  const updateName = (e) => {
    name === "Cartoon" ? setName("Anime") : setName("Cartoon");
    // console.log(name);
    // setName()
  };

  const Increment = () => {
    setAge(age + 1)
  };

  const decrement = () => {
if (age === 0) {
    return;
}
setAge(age - 1)
  };

  const Job = () => {
    console.log(Working);

    Working == false ? setWokring(true) : setWokring(false);
  };

  const reset = () => {
    setAge(0)
  }

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
      <p>Age: {age}</p>
      <button onClick={Increment}>Increment</button>{" "}
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Decrenment</button>

      {Working === true ? <h1>Yes he is employed!</h1> : <h1>Nope, still looking for Job</h1>}
      <button onClick={Job}>Toggle</button>
    </div>
  );
}
