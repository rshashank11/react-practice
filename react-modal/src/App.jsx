import React, { useEffect, useState } from "react"
import Modal from "../components/Modal"
import "./App.css"
import DialogModal from "../components/DialogModal"

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div>
      {/* <button onClick={() => setIsModalOpen(true)}>Show Custom Modal</button>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> */}
      <button onClick={() => setIsModalOpen(true)}>Show Dialog Modal</button>
      <DialogModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  )
}

export default App
