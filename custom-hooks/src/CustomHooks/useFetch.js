import { useReducer } from "react"
import { useEffect } from "react"

const ACTIONS = {
  START: "Start",
  SUCCESS: "Success",
  ERROR: "Error",
}

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.SUCCESS:
      return {
        data: payload.data,
        isLoading: false,
        isError: false,
      }

    case ACTIONS.START:
      return {
        isLoading: true,
        isError: false,
      }
    case ACTIONS.ERROR:
      return {
        isLoading: false,
        isError: true,
      }
    default:
      return state
  }
}

export function useFetch(url, options) {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    isError: false,
    data: [],
  })

  useEffect(() => {
    dispatch({ type: ACTIONS.START })
    const controller = new AbortController()

    fetch(url, { signal: controller.signal, ...options })
      .then((res) => {
        if (res.status >= 400) {
          return Promise.reject(res)
        } else {
          return res.json()
        }
      })
      .then((data) => dispatch({ type: ACTIONS.SUCCESS, payload: { data } }))
      .catch((error) => {
        if (error.name === "AbortError") return
        dispatch({ type: ACTIONS.ERROR, payload: { error } })
      })

    return () => {
      controller.abort()
    }
  }, [url])

  return state
}
