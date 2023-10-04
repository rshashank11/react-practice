import { baseAPI } from "./BaseAPI"

export async function getPosts(options) {
  const res = await baseAPI.get("posts", options)
  return res.data
}

export async function getPost(postId, options) {
  const res = await baseAPI.get(`posts/${postId.toString()}`, options)
  return res.data
}

export async function createPost(data, options) {
  const res = await baseAPI.post("posts", data, options)
  return res.data
}
