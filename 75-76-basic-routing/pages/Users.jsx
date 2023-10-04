import axios from "axios"
import React from "react"
import { Link, useLoaderData } from "react-router-dom"

function Users() {
  const users = useLoaderData()
  return (
    <>
      <h1 className="page-title">Users</h1>
      <div className="card-grid">
        {users.map((user) => {
          return (
            <div key={user.id} className="card">
              <div className="card-header">{user.name}</div>
              <div className="card-body">
                <div>{user.company.name}</div>
                <div>{user.website}</div>
                <div>{user.email}</div>
              </div>
              <div className="card-footer">
                <Link className="btn" to={user.id.toString()}>
                  View
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

async function loader({ request: { signal } }) {
  const users = await axios
    .get("http://localhost:3000/users")
    .then((res) => res.data)
  return users
}

export const usersRoute = {
  loader,
  element: <Users />,
}
