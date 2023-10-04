import { baseAPI } from "./BaseAPI"

export async function getTodos(options) {
  const res = await baseAPI.get("todos", options)
  return res
}
