import { baseAPI } from "./BaseAPI"

export async function getUsers(options) {
  const res = await baseAPI.get("users", options)
  return res.data
}

export async function getUser(userId, options) {
  const res = await baseAPI.get(`users/${userId}`, options)
  return res.data
}
