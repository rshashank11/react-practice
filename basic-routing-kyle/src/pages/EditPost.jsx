import {
  Form,
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom"
import { getUsers } from "../api/Users"
import { getPost } from "../api/Posts"
import { Link } from "react-router-dom"
import { baseAPI } from "../api/BaseAPI"
import { formValidator } from "../components/FormValidator"

function EditPost() {
  const { state } = useNavigation()
  const { users, post } = useLoaderData()
  const errors = useActionData()
  const isSubmitting = state === "loading" || state === "submitting"
  return (
    <>
      <h1 className="page-title">Edit Post</h1>
      <Form method="post" className="form">
        <div className="form-row">
          <div className={`form-group ${errors ? "error" : ""}`}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              defaultValue={post.title}
            />
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
          <div className="form-group">
            <label htmlFor="body">Body</label>
            <textarea name="body" id="body" defaultValue={post.body}></textarea>
          </div>
        </div>
        <div className="form-row form-btn-row">
          <Link className="btn btn-outline" to="..">
            Cancel
          </Link>
          <button disabled={isSubmitting} type="submit" className="btn">
            {isSubmitting ? "Loading" : "Save"}
          </button>
        </div>
      </Form>
    </>
  )
}

async function loader({ request: { signal }, params: { postId } }) {
  const post = await getPost(postId, { signal })
  const users = await getUsers({ signal })
  return { users, post }
}

async function action({ request, params: { postId } }) {
  const formData = await request.formData()
  const title = formData.get("title")
  const userId = formData.get("userId")
  const body = formData.get("body")
  const data = { title, userId, body }
  const errors = formValidator(data)
  if (Object.keys(errors).length > 0) {
    return errors
  }
  const post = await baseAPI
    .put(`posts/${postId}`, data, { signal: request.signal })
    .then((res) => res.data)

  return redirect(`/posts/${post.id}`)
}

export const editPostRoute = {
  loader,
  action,
  element: <EditPost />,
}
