import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import Modal from './components/Modal'

const App = () => {
  const[open, setOpen] = useState(false)
  return (
    <>
    <h1>Welcome to this App</h1>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      {
        createPortal(
          <Modal open={open} setOpen={setOpen} closeOnClick>
        <h1>A modal Demo</h1>
        <button onClick={() => setOpen(false)}>Close modal</button>
      </Modal>,
      document.getElementById("modal")
        )
      }
      
    </>
  )
}

export default App

