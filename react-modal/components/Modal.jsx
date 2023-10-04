import React, { useEffect } from "react"
import { createPortal } from "react-dom"

function Modal({ isModalOpen, setIsModalOpen }) {
  useEffect(() => {
    function keyDownHandler(event) {
      if (event.key === "Escape") {
        setIsModalOpen(false)
      }
    }
    document.addEventListener("keydown", keyDownHandler)

    return () => {
      document.removeEventListener("keydown", keyDownHandler)
    }
  }, [isModalOpen])

  return createPortal(
    <div>
      <div className={`modal-overlay ${isModalOpen && "show"}`}>
        <div className="modal">
          <p>
            This is a <strong>CUSTOM</strong> modal
          </p>
          <button
            onClick={() => {
              setIsModalOpen(false)
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.querySelector("#modal-container")
  )
}

export default Modal
