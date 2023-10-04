import { Form, useNavigation } from "react-router-dom"

export default function FilterPosts({ users, query, queryRef, userRef }) {
  const { state } = useNavigation()
  const isSubmitting = state === "loading" || state === "submitting"
  return (
    <>
      <Form method="get" className="form mb-4">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="query">Query</label>
            <input
              type="search"
              ref={queryRef}
              name="query"
              defaultValue={query}
              id="query"
            />
          </div>
          <div className="form-group">
            <label htmlFor="userId">Author</label>
            <select ref={userRef} type="search" name="userId" id="userId">
              <option value="">Any</option>
              {users.map((user) => {
                return (
                  <option value={user.id} key={user.id}>
                    {user.name}
                  </option>
                )
              })}
            </select>
          </div>
          <button disabled={isSubmitting} className="btn">
            {isSubmitting ? "Loading" : "Filter"}
          </button>
        </div>
      </Form>
    </>
  )
}
