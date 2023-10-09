import { useEffect, useState } from "react"

export function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  useEffect(() => {
    console.log("hello")
  })
  return [value, (e) => setValue(e.target.value)]
}
