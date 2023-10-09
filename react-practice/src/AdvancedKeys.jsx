import React, { useState } from "react"

const AdvancedKeys = () => {
  const [changeDogs, setChangeDogs] = useState(false)
  return (
    <div>
      <h1>{changeDogs ? "Dogs" : "Cats"}</h1>
      <input placeholder="No key" type="number" />
      <br />
      <input
        placeholder="Has a key"
        type="number"
        key={changeDogs ? "dogs" : "cats"}
      />
      <button onClick={() => setChangeDogs((d) => !d)}>Switch</button>
    </div>
  )
}

export default AdvancedKeys
