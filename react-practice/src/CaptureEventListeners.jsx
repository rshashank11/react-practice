import React from "react"

const CaptureEventListeners = () => {
  return (
    <div>
      <div
        onClickCapture={() => console.log("Div")}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "500px",
          height: "500px",
          backgroundColor: "red",
        }}
      >
        <button onClickCapture={() => console.log("Button")}>Click Me</button>
      </div>
    </div>
  )
}

export default CaptureEventListeners
