import { baseAPI } from "./BaseAPI"

export async function getComments(postId, options) {
  const res = await baseAPI.get(`posts/${postId}/comments`, options)
  return res.data
}
