import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { ordered, restocked } from "./cakeSlice"

const CakeView = () => {
  const dispatch = useDispatch()
  const numOfCakes = useSelector((state) => state.cake.numOfCakes)

  return (
    <>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered(1))}>Order cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock cakes</button>
    </>
  )
}

export default CakeView
