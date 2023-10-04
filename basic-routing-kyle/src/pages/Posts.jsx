import React, { useEffect, useRef } from "react"
import { Link, useLoaderData } from "react-router-dom"
import { getPosts } from "../api/Posts"

import { PostCard } from "../components/PostCard"
import { getUsers } from "../api/Users"
import FilterPosts from "../components/FilterPosts"

function Posts() {
  const { posts, users, query = "", userId = "" } = useLoaderData()
  const queryRef = useRef()
  const userRef = useRef()

  useEffect(() => {
    queryRef.current.value = query || ""
  }, [query])

  useEffect(() => {
    userRef.current.value = userId || ""
  }, [userId])
  return (
    <>
      <div>
        <h1 className="page-title">
          Posts
          <div className="title-btns">
            <Link className="btn btn-outline" to="/posts/new">
              New
            </Link>
          </div>
        </h1>
        <FilterPosts
          users={users}
          queryRef={queryRef}
          userRef={userRef}
          query={query}
        />
        <div className="card-grid">
          {posts.map((post) => {
            return <PostCard key={post.id} {...post} />
          })}
        </div>
      </div>
    </>
  )
}

async function loader({ request: { signal, url } }) {
  const searchParams = new URL(url).searchParams
  const query = searchParams.get("query")
  const userId = searchParams.get("userId")
  const filterParams = { q: query }
  if (userId !== "") filterParams.userId = userId

  const posts = getPosts({ signal, params: filterParams })
  const users = await getUsers({ signal })
  return { posts: await posts, users, query, userId }
}

export const postsRoute = {
  loader,
  element: <Posts />,
}
