import React from "react"
import axios from "axios"
import { Link, useLoaderData, useNavigation } from "react-router-dom"

function Post() {
  const { comments, post, user } = useLoaderData()
  const { state } = useNavigation()
  return (
    <>
      {state === "loading" ? (
        <div className="loader"></div>
      ) : (
        <>
          <h1 className="page-title">{post.title}</h1>
          <span className="page-subtitle">
            By: <Link to={user.id.toString()}>{user.name}</Link>
          </span>
          <div>{post.body}</div>
          <h3 className="mt-4 mb-2">Comments</h3>
          <div className="card-stack">
            {comments.map((comment) => {
              return (
                <div key={comment.id} className="card">
                  <div className="card-body">
                    <div className="text-sm mb-1">{comment.email}</div>
                    {comment.body}
                  </div>
                </div>
              )
            })}
          </div>
        </>
      )}
    </>
  )
}

async function loader({ request: { signal }, params: { postId } }) {
  const comments = await axios
    .get(`http://localhost:3000/posts/${postId}/comments`, {
      signal,
    })
    .then((res) => res.data)
  const post = await axios
    .get(`http://localhost:3000/posts/${postId}`, { signal })
    .then((res) => res.data)
  const user = await axios
    .get(`http://localhost:3000/users/${post.userId}`, { signal })
    .then((res) => res.data)
  return { comments, post, user }
}

export const postRoute = {
  loader,
  element: <Post />,
}
