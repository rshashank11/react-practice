import { useEffect, useState } from "react";

export function Child() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(`My name is ${name}`);
    }, 1000);
    return () => clearTimeout(timer);
  }, [name]);

  useEffect(() => {
    console.log("Re-render"); // Log when the component re-renders
  });

  useEffect(() => {
    console.log(`My name is ${name} and I am ${age} years old.`); // Changes when either name or age changes
  }, [name, age]);

  useEffect(() => {
    document.title = name; //Document title changes when name changes
  }, [name]);

  useEffect(() => {
    console.log("Hi"); //Mounts

    return () => {
      console.log("Bye");
    };
  }, []);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => setAge((a) => a - 1)}>-</button>
      {age}
      <button onClick={() => setAge((a) => a + 1)}>+</button>
      <br />
      <br />
      My name is {name} and I am {age} years old.
    </div>
  );
}
