import React, { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

export default function DialogModal({ isModalOpen, setIsModalOpen }) {
  const dialogRef = useRef(null)
  useEffect(() => {
    const dialog = dialogRef.current
    if (dialog == null) return
    if (isModalOpen) {
      dialog.showModal()
    } else {
      dialog.close()
    }
  }, [isModalOpen])

  useEffect(() => {
    const dialog = dialogRef.current
    if (dialog == null) return

    dialog.addEventListener("close", setIsModalOpen(false))

    return () => {
      dialog.removeEventListener("close", setIsModalOpen(false))
    }
  }, [isModalOpen, dialogRef])
  return createPortal(
    <div>
      <dialog ref={dialogRef}>
        <p>
          This is a <strong>DIALOG</strong> modal
        </p>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </dialog>
    </div>,
    document.querySelector("#modal-container")
  )
}
