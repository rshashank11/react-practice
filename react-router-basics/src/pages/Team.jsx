import React from "react"
import { NavLink, Outlet, useLoaderData, useNavigation } from "react-router-dom"

export default function Team() {
  const membersData = useLoaderData()
  const { state } = useNavigation()
  return (
    <div>
      Team
      <ul>
        {membersData.map((member) => {
          return (
            <li key={member.id}>
              <NavLink to={member.id.toString()}>
                Team Member - {member.name}
              </NavLink>
            </li>
          )
        })}
      </ul>
      {state === "loading" ? <h1>Loading...</h1> : <Outlet />}
    </div>
  )
}
