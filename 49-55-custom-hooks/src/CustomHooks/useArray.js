import { useState } from "react"

export function useArray(initialArray) {
  const [array, setArray] = useState(initialArray)
  return {
    array,
    set: setArray,
    push: (ele) => {
      setArray((currentArray) => {
        return [...currentArray, ele]
      })
    },
    replace: (index, ele) => {
      setArray((array) => {
        // return [...array.slice(0, index), ele, ...array.slice(index + 1)]
        return array.map((arr, i) => {
          if (i === index) return ele
          return arr
        })
      })
    },
    filter: (callback) => {
      setArray((currentArray) => {
        return currentArray.filter(callback)
      })
    },
    remove: (index) =>
      setArray((currentArray) => {
        return [
          ...currentArray.slice(0, index),
          ...currentArray.slice(index + 1),
        ]
      }),
    clear: () => {
      setArray([])
    },
    reset: () => {
      setArray(initialArray)
    },
  }
}
