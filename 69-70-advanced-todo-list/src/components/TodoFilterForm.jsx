import { useContext } from "react"
import { TodoContext } from "../hooks/TodoContext"

function TodoFilterForm() {
  const { setFilterName, filterName, hideCompleted, setHideCompleted } =
    useContext(TodoContext)
  return (
    <div className="filter-form">
      <div className="filter-form-group">
        <label htmlFor="name">Name</label>
        <input
          onChange={(e) => setFilterName(e.target.value)}
          type="text"
          id="name"
          value={filterName}
        />
      </div>
      <label>
        <input
          checked={hideCompleted}
          onChange={(e) => setHideCompleted(e.target.checked)}
          type="checkbox"
        />
        Hide Completed
      </label>
    </div>
  )
}

export default TodoFilterForm
