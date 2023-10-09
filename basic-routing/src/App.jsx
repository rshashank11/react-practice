import React from "react"

import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom"
function App() {
  // const [users, setUsers] = useState([])
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/users/1", {})
  //     .then((res) => console.log(res))
  //   // .then((data) => setUsers(data))
  // })
  return (
    <div>
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

export default App
