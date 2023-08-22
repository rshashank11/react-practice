import React, { useContext, useReducer } from "react"

const ACTIONS = {
  ADD: "ADD",
  UPDATE: "UPDATE",
  TOGGLE: "TOGGLE",
  DELETE: "DELETE",
}

export const TodoContext = React.createContext()

function reducer(todos, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD:
      return [
        ...todos,
        { name: payload.name, completed: false, id: crypto.randomUUID() },
      ]
    case ACTIONS.TOGGLE:
      return todos.map((todo) => {
        if (todo.id === payload.todoId)
          return { ...todo, completed: payload.completed }

        return todo
      })
    case ACTIONS.DELETE:
      return todos.filter((todo) => todo.id !== payload.todoId)

    default:
      throw new Error(`No action found for ${type}`)
  }
}

export function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(reducer, [], (initialValue) => {
    const value = localStorage.getItem("TODOS")
    if (value == null) return initialValue

    return JSON.parse(value)
  })

  function addNewTodo(name) {
    dispatch({ type: ACTIONS.ADD, payload: { name } })
  }

  function toggleTodo(todoId, completed) {
    dispatch({
      type: ACTIONS.TOGGLE,
      payload: { todoId, completed },
    })
  }

  function deleteTodo(todoId) {
    dispatch({ type: ACTIONS.DELETE, payload: { todoId } })
  }
  return (
    <TodoContext.Provider
      value={{ todos, dispatch, addNewTodo, toggleTodo, deleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  )
}
