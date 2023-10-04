import axios from "axios"
import React from "react"
import { useLoaderData, useNavigation } from "react-router-dom"

function Todos() {
  const todos = useLoaderData()
  const { state } = useNavigation()
  return (
    <>
      {state === "loading" ? (
        <div className="loader"></div>
      ) : (
        <>
          <h1 className="page-title">Todos</h1>
          <ul>
            {todos.map((todo) => {
              return (
                <li
                  className={todo.completed && "strike-through"}
                  key={todo.id}
                >
                  {todo.title}
                </li>
              )
            })}
          </ul>
        </>
      )}
    </>
  )
}

async function loader({ request: { signal } }) {
  const todos = await axios
    .get("http://localhost:3000/todos", { signal })
    .then((res) => res.data)
  return todos
}

export const todosRoute = {
  loader,
  element: <Todos />,
}
