import React from "react"
import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom"
import NavBar from "../components/NavBar"

function NavLayout() {
  const { state } = useNavigation()
  return (
    <div>
      <NavBar />
      <ScrollRestoration />
      {state === "loading" && <div className="loading-spinner"></div>}
      <div className={state === "loading" ? "container loading" : "container"}>
        <Outlet />
      </div>
    </div>
  )
}

export default NavLayout
