import { useEffect, useState } from "react";
import React from "react";

function CounterFunction() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    console.log("Age changed: ", age);
  }, [age]);
  return (
    <>
      <input onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <button
        style={{ display: "inline" }}
        onClick={() => setAge((currentAge) => currentAge - 1)}
      >
        -
      </button>
      <h2 style={{ display: "inline" }}>{age}</h2>
      <button onClick={() => setAge((currentAge) => currentAge + 1)}>+</button>
      <h1>
        My name is {name} and I am {age} years old.
      </h1>
    </>
  );
}

export default CounterFunction;
