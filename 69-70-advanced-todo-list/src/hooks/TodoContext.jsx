import React, { useReducer, useState } from "react"

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

    case ACTIONS.UPDATE:
      return todos.map((todo) => {
        if (todo.id === payload.todoId) {
          return { ...todo, name: payload.name, completed: payload.completed }
        }
        return todo
      })
    default:
      throw new Error(`No action found for ${type}`)
  }
}

export function TodoProvider({ children }) {
  const [filterName, setFilterName] = useState("")
  const [hideCompleted, setHideCompleted] = useState(false)
  const [todos, dispatch] = useReducer(reducer, [], (initialValue) => {
    const value = localStorage.getItem("TODOS")
    if (value == null) return initialValue

    return JSON.parse(value)
  })

  const filteredTodos = todos.filter((todo) => {
    if (hideCompleted && todo.completed) return
    return todo.name.toLowerCase().includes(filterName)
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

  function updateTodo(todoId, name, completed) {
    dispatch({ type: ACTIONS.UPDATE, payload: { todoId, name, completed } })
  }

  function deleteTodo(todoId) {
    dispatch({ type: ACTIONS.DELETE, payload: { todoId } })
  }
  return (
    <TodoContext.Provider
      value={{
        todos: filteredTodos,
        hideCompleted,
        setHideCompleted,
        filterName,
        setFilterName,
        dispatch,
        addNewTodo,
        toggleTodo,
        deleteTodo,
        updateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
