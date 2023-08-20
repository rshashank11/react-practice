import { useState } from "react";

function CounterFunction() {
  function handleClick() {
    setPerson((currentPerson) => {
      return { ...currentPerson, name: "Sally", age: 23 };
    });
  }
  const [count, setCount] = useState(0);
  function handleClick() {
    console.log("Before:", count);

    setCount(count + 1);
    console.log("After 1:", count);

    setCount(count + 1);
    console.log("After 2:", count);
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>Click</button>
    </>
  );
}

export default CounterFunction;
