import React from "react"
import "./App.css"
import TodoFilterForm from "./components/TodoFilterForm"
import { NewTodoForm } from "./components/NewTodoForm"
import TodoList from "./components/TodoList"

function App() {
  return (
    <div className="App">
      <NewTodoForm />
      <TodoList />
      <TodoFilterForm />
    </div>
  )
}

export default App
