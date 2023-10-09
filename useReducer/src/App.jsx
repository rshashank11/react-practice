import { useReducer } from "react"

function reducer(count, action) {
  switch (action.type) {
    case "Decrement":
      return count - 1
    case "Increment":
      return count + 1
    case "Reset":
      return 0
    default:
      return count
  }
}

function App({ initialCount = 0 }) {
  const [count, dispatch] = useReducer(reducer, initialCount)
  return (
    <>
      <button onClick={() => dispatch({ type: "Decrement" })}>-</button>
      {count}
      <button onClick={() => dispatch({ type: "Increment" })}>+</button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </>
  )
}

export default App
