import {
  Form,
  Link,
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom"
import { baseAPI } from "../api/BaseAPI"
import { getUsers } from "../api/Users"

function NewPost() {
  const users = useLoaderData()
  const errorMessage = useActionData()
  const { state } = useNavigation()
  const isSubmitting = state === "loading" || state === "submitting"
  return (
    <>
      <h1 className="page-title">New Post</h1>
      <Form method="post" className="form">
        <div className="form-row">
          <div className={`form-group ${errorMessage ? "error" : ""}`}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="userId">Author</label>
            <select name="userId" id="userId">
              {users.map((user) => {
                return (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                )
              })}
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className={`form-group ${errorMessage && "error"}`}>
            <label htmlFor="body">Body</label>
            <textarea name="body" id="body"></textarea>
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
          </div>
        </div>
        <div className="form-row form-btn-row">
          <Link className="btn btn-outline" to="..">
            Cancel
          </Link>
          <button disabled={isSubmitting} className="btn">
            {isSubmitting ? "Loading" : "Save"}
          </button>
        </div>
      </Form>
    </>
  )
}

async function action({ request }) {
  const formData = await request.formData()
  const title = await formData.get("title")
  const userId = await formData.get("userId")
  const body = await formData.get("body")
  if (title === "" || body === "") {
    return "Title and body is required"
  }
  const data = { title, body, userId }
  const post = await baseAPI
    .post("posts", data, { request: request.signal })
    .then((res) => res.data)
  //   const post = await createPost(
  //     { title, body, userId },
  //     { signal: request.signal }
  //   )

  return redirect(`/posts/${post.id}`)
}

async function loader({ request: { signal } }) {
  const users = await getUsers({ signal })
  return users
}

export const newPostRoute = {
  action,
  loader,
  element: <NewPost />,
}
