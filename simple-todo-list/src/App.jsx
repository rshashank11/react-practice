import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [userInput, setUserInput] = useState("");

  function addTodo() {
    if (userInput === "") {
      return;
    }
    setTodos([
      ...todos,
      { todo: userInput, id: crypto.randomUUID(), completed: false },
    ]);
  }
  return (
    <>
      <TodoList todos={todos} setTodos={setTodos} />
      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          onChange={(e) => setUserInput(e.target.value)}
          type="text"
          id="todo-input"
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </>
  );
}

export default App;
