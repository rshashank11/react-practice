import React, { useLayoutEffect, useRef, useState } from "react"

const ShowToolTip = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [popupTop, setPopupTop] = useState(0)
  const buttonRef = useRef(null)

  useLayoutEffect(() => {
    if (buttonRef.current == null || !isOpen) return setPopupTop(0)
    const { bottom } = buttonRef.current.getBoundingClientRect()
    setPopupTop(bottom + 30)
  }, [isOpen])
  return (
    <div>
      <button ref={buttonRef} onClick={() => setIsOpen((v) => !v)}>
        Show Tooltip
      </button>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: `${popupTop}px`,
            border: "1px solid black",
          }}
        >
          Tooltip
        </div>
      )}
    </div>
  )
}

export default ShowToolTip
