import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
const BASE_URL = import.meta.env.VITE_BACKEND

function App() {
  return (
    <>
      <header>{/* navbar will be here */}</header>
      <main>
        Starter Page
        {/* <Routes>
          <Route path="/" element={} />
        </Routes> */}
      </main>
    </>
  )
}

export default App
