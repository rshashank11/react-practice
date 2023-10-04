import React from "react"
import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <>
      <nav className="top-nav">
        <div className="nav-text-large">Basic Blog Website</div>
        <ul className="nav-list">
          <li>
            <NavLink to="posts">Posts</NavLink>
          </li>
          <li>
            <NavLink to="users">Users</NavLink>
          </li>
          <li>
            <NavLink to="todos">Todos</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
