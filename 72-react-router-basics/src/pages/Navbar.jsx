import React from "react"
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/team" end>
            Team
          </NavLink>
        </li>

        <li>
          <NavLink to=".">. Route</NavLink>
        </li>
        <li>
          <NavLink to="." relative="path">
            . Relative Path
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
