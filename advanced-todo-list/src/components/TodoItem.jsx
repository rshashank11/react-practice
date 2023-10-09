import { useContext, useEffect, useRef, useState } from "react"
import { TodoContext } from "../hooks/TodoContext"

export function TodoItem({ id, name, completed }) {
  const [isReadOnly, setIsReadOnly] = useState(true)
  useEffect(() => {
    textareaRef.current.style.height = "0px"
    const scrollHeight = textareaRef.current.scrollHeight
    textareaRef.current.style.height = scrollHeight + "px"
  }, [name])
  const { updateTodo, toggleTodo, deleteTodo } = useContext(TodoContext)
  const textareaRef = useRef(null)

  function handleSubmit(event) {
    setIsReadOnly(!isReadOnly)

    if (event.target.innerText === "Edit" && completed) {
      updateTodo(id, name, !completed)
    }
    if (event.target.innerText === "Save") {
      updateTodo(id, textareaRef.current.value, completed)
    }
  }

  return (
    <li className="list-item">
      <label htmlFor={id} className="list-item-label">
        <input
          checked={completed}
          type="checkbox"
          data-list-item-checkbox
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <textarea
          id={id}
          ref={textareaRef}
          // onChange={(e) => updateTodo(id, e.target.value, completed)}
          readOnly={isReadOnly}
          defaultValue={name}
          data-list-item-text
        ></textarea>
      </label>
      <button onClick={handleSubmit}>{isReadOnly ? "Edit" : "Save"}</button>
      <button onClick={() => deleteTodo(id)} data-button-delete>
        Delete
      </button>
    </li>
  )
}
