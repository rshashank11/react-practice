import { createPortal } from "react-dom"

export function Portal() {
  return (
    <>
      <div style={{ marginTop: "200px" }}>Div content</div>
      <button>Button</button>
      <Alert />
    </>
  )
}

export function Alert() {
  return createPortal(
    <div style={{ position: "absolute", top: "10px" }}>
      <div>Alert Message</div>
      <button>Close</button>
    </div>,
    document.querySelector("#alert")
  )
}
