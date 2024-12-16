import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Components/Home/Home'
import Vans from './Components/Vans/Vans'



function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/vans">Vans</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </div>
  )
}

export default App
