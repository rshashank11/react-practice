import React from "react"
import axios from "axios"
import { Link, useLoaderData, useNavigation } from "react-router-dom"

function Posts() {
  const { state } = useNavigation()
  const postsData = useLoaderData()
  return (
    <>
      {state === "loading" ? (
        <div className="loader"></div>
      ) : (
        <div>
          <h1 className="page-title">Posts</h1>
          <div className="card-grid">
            {postsData.map((post) => {
              return (
                <div key={post.id} className="card">
                  <div className="card-header">{post.title}</div>
                  <div className="card-body">
                    <div className="card-preview-text">{post.body}</div>
                  </div>
                  <div className="card-footer">
                    <Link className="btn" to={`../posts/${post.id.toString()}`}>
                      View
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}

async function loader({ request: { signal } }) {
  const res = await axios.get("http://localhost:3000/posts", { signal })
  return res.data
}

export const postsRoute = {
  loader,
  element: <Posts />,
}
