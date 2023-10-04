import { getPosts } from "../api/Posts"
import { getTodos } from "../api/Todos"
import { getUser } from "../api/Users"
import { useLoaderData, Link } from "react-router-dom"
import { PostCard } from "../components/PostCard"
import { TodoList } from "../components/TodoList"

function User() {
  const { user, posts, todos } = useLoaderData()
  return (
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
          return <PostCard key={post.id} {...post} />
        })}
      </div>
      <h3 className="page-title">Todos</h3>
      <ul>
        {Array.isArray(todos)
          ? todos.map((todo) => {
              return <TodoList key={todo.id} {...todo} />
            })
          : null}
      </ul>
    </>
  )
}

async function loader({ request: { signal }, params: { userId } }) {
  const user = getUser(userId, { signal })
  const posts = getPosts({ params: { userId }, signal })
  const todos = getTodos({ params: { userId }, signal })
  return { user: await user, posts: await posts, todos: await todos }
}

export const userRoute = {
  loader,
  element: <User />,
}
