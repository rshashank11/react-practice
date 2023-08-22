import { useContext, useRef } from "react"
import { TodoContext } from "../hooks/TodoContext"

export function NewTodoForm() {
  const { addNewTodo } = useContext(TodoContext)
  const nameRef = useRef()
  function handleSubmit(event) {
    event.preventDefault()
    if (nameRef.current.value === "") return

    addNewTodo(nameRef.current.value)

    nameRef.current.value = ""
  }
  return (
    <form onSubmit={handleSubmit} id="new-todo-form">
      <label htmlFor="todo-input">New Todo</label>
      <input type="text" id="todo-input" ref={nameRef} />
      <button type="submit">Add Todo</button>
    </form>
  )
}
