import axios from "axios"
import { Link, useLoaderData, useNavigation } from "react-router-dom"

function User() {
  const { user, posts, todos } = useLoaderData()
  const { state } = useNavigation()
  return (
    <>
      {state === "loading" ? (
        <div className="loader"></div>
      ) : (
        <>
          <h1 className="page-title">{user.name}</h1>
          <div className="page-subtitle">{user.email}</div>
          <div>
            <b>Company:</b> {user.company.name}
          </div>
          <div>
            <b>Website:</b> {user.website}
          </div>
          <div>
            <b>Address:</b>
            {user.address.street}, {user.address.suite}, {user.address.city},{" "}
            {user.address.zipcode}
          </div>
          <h3 className="mt-4 mb-2">Posts</h3>
          <div className="card-grid">
            {posts.map((post) => {
              return (
                <div key={post.id} className="card">
                  <div className="card-header">{post.title}</div>
                  <div className="card-body">
                    <div className="card-preview-text">{post.body}</div>
                  </div>
                  <div className="card-footer">
                    <Link
                      className="btn"
                      to={`../../posts/${post.id.toString()}`}
                    >
                      View
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
          <h3 className="page-title">Todos</h3>
          <ul>
            {todos.map((todo) => {
              return (
                <li
                  className={todo.completed && "strike-through"}
                  key={todo.id}
                >
                  {todo.title}
                </li>
              )
            })}
          </ul>
        </>
      )}
    </>
  )
}

async function loader({ request: { signal }, params: { userId } }) {
  const user = await axios
    .get(`http://localhost:3000/users/${userId}`, {
      signal,
    })
    .then((res) => res.data)
  const posts = await axios
    .get("http://localhost:3000/posts", { signal, params: { userId } })
    .then((res) => res.data)
  const todos = await axios
    .get("http://localhost:3000/todos", { signal, params: { userId } })
    .then((res) => res.data)
  return { user, posts, todos }
}

export const userRoute = {
  loader,
  element: <User />,
}
