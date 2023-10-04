import React from "react"
import { Form, Link, useLoaderData } from "react-router-dom"
import { getTodos } from "../api/Todos"
import { TodoList } from "../components/TodoList"

function Todos() {
  const { todos, query } = useLoaderData()
  return (
    <>
      <h1 className="page-title">
        Todos
        <div className="title-btns">
          <Link to="/new" className="btn">
            New
          </Link>
        </div>
      </h1>

      <Form className="form" method="get" action="/todos">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="query">Search</label>
            <input type="search" name="q" defaultValue={query.q} id="query" />
          </div>
          <button className="btn">Search</button>
        </div>
      </Form>

      <ul>
        {todos.map((todo) => {
          return <TodoList key={todo.id} {...todo} />
        })}
      </ul>
    </>
  )
}

async function loader({ request: { signal, url } }) {
  console.log(url)
  const searchParams = new URL(url).searchParams
  const q = searchParams.get("q") || " "
  return {
    todos: await getTodos({ signal, params: { q } }).then((res) => {
      return res.data
    }),
    query: { q },
  }
}

export const todosRoute = {
  loader,
  element: <Todos />,
}
