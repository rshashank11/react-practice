import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { TodoProvider } from "./hooks/TodoContext.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <TodoProvider>
    <App />
  </TodoProvider>
)
