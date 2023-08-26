import React, { useContext, useEffect } from "react"

import { TodoItem } from "./TodoItem"
import { TodoContext } from "../hooks/TodoContext"

function TodoList() {
  const { todos } = useContext(TodoContext)
  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos))
  }, [todos])
  return (
    <ul id="list">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} {...todo} />
      })}
    </ul>
  )
}

export default TodoList
