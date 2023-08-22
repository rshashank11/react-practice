import React from "react"
import "./App.css"
import { NewTodoForm } from "./components/NewTodoForm"
import TodoList from "./components/TodoList"

function App() {
  return (
    <>
      <TodoList />
      <NewTodoForm />
    </>
  )
}

export default App
