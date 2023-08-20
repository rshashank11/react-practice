import { useEffect, useState } from "react"

export function useFetch(url, options) {
  const [data, setData] = useState(undefined)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setIsError(false)
    setData(undefined)

    const controller = new AbortController()

    fetch(url, { signal: controller.signal, ...options })
      .then((res) => {
        if (res.status >= 400) {
          return Promise.reject(res)
        } else {
          return res.json()
        }
      })
      .then((data) => setData(data))
      .catch((error) => {
        if (error.name === "AbortError") return
        setIsError(true)
      })
      .finally(() => {
        if (controller.signal.aborted) return
        setIsLoading(false)
      })

    return () => {
      controller.abort()
    }
  }, [url])

  return { data, isError, isLoading }
}
