export function TodoList({ completed, title }) {
  return <li className={completed ? "strike-through" : ""}>{title}</li>
}
