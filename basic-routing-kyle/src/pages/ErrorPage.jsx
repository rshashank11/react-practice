import { useRouteError } from "react-router-dom"

export function ErrorPage() {
  const error = useRouteError()
  console.log(error)
  return (
    <div>
      <h1>Error</h1>
      <pre>{error.message}</pre>
      <pre>{error.stack}</pre>
    </div>
  )
}
