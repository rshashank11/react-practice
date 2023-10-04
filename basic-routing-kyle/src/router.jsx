import { createBrowserRouter, Navigate } from "react-router-dom"
import { postsRoute } from "./pages/Posts"
import { usersRoute } from "./pages/Users"
import { todosRoute } from "./pages/Todos"
import NavLayout from "./layouts/NavLayout"
import { postRoute } from "./pages/Post"
import { ErrorPage } from "./pages/ErrorPage"
import { userRoute } from "./pages/User"
import { newPostRoute } from "./pages/NewPost"
import { editPostRoute } from "./pages/EditPost"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to="/posts" /> },
          {
            path: "posts",
            children: [
              { index: true, ...postsRoute },
              {
                path: ":postId",
                children: [
                  { index: true, ...postRoute },
                  { path: "edit", ...editPostRoute },
                ],
              },
              { path: "new", ...newPostRoute },
            ],
          },
          {
            path: "users",
            children: [
              { index: true, ...usersRoute },
              { path: ":userId", ...userRoute },
            ],
          },
          {
            path: "todos",
            ...todosRoute,
          },
          { path: "*", element: <h1>404 error - Page not found</h1> },
        ],
      },
    ],
  },
])
