import App from "./App"
import { usersRoute } from "../pages/Users"
import { postsRoute } from "../pages/Posts"
import { todosRoute } from "../pages/Todos"
import { createBrowserRouter } from "react-router-dom"
import { postRoute } from "../pages/Post"
import { userRoute } from "../pages/User"
import { ErrorPage } from "../pages/ErrorPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        errorElement: <ErrorPage />,
        path: "users",
        children: [
          { index: true, ...usersRoute },
          { path: ":userId", ...userRoute },
        ],
      },
      {
        errorElement: <ErrorPage />,
        path: "posts",

        children: [
          { index: true, ...postsRoute },
          { path: ":postId", ...postRoute },
        ],
      },
      {
        errorElement: <ErrorPage />,
        path: "todos",
        ...todosRoute,
      },
      {
        path: "*",
        element: <h1>404 - Page not found.</h1>,
      },
    ],
  },
])
