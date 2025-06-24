import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <main className="mt-20 px-6 text-center">
          <h1 className="text-4xl font-bold">Welcome to LOTS EYE</h1>
          <p className="text-gray-600 mt-4">Your one-stop branding solution.</p>
        </main>
      </div>
    </>
  )
}

export default App
