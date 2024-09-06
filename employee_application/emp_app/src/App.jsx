import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Add from './components/Add'
import View from './components/View'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/add' element={<Add />} />
        <Route path='/view' element={<View />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
