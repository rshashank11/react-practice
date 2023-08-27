import { createBrowserRouter } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import App from "../App"
import Team from "./Team"
import TeamMember from "./TeamMember"

export const router = createBrowserRouter([
  {
    errorElement: <h1>Error</h1>,
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      {
        path: "/team",
        element: <Team />,
        loader: ({ request: { signal } }) => {
          return fetch("https://jsonplaceholder.typicode.com/users", { signal })
        },
        children: [
          {
            path: ":memberId",
            element: <TeamMember />,
            loader: ({ params, request: { signal } }) => {
              return fetch(
                `https://jsonplaceholder.typicode.com/users/${params.memberId}`,
                {
                  signal,
                }
              )
            },
          },
        ],
      },
    ],
  },
])
