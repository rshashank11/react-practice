import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ordered, restocked } from "./iceCreamSlice"

const IceCreamView = () => {
  const [restockValue, setRestockValue] = useState(1)
  const numOfIceCreams = useSelector((state) => state.icecream.numOfIceCreams)
  const dispatch = useDispatch()
  return (
    <>
      <h2>Number of ice creams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(ordered(1))}>Order ice cream</button>
      <input
        type="number"
        value={restockValue}
        onChange={(e) => setRestockValue(parseInt(e.target.value))}
        placeholder="Enter the restock value."
      />
      <button onClick={() => dispatch(restocked(restockValue))}>
        Restock ice creams
      </button>
    </>
  )
}

export default IceCreamView
