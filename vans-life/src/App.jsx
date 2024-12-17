import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import './App.css';
import Vans from './Components/Vans/Vans';
import VanDetail from './Components/VanDetail/VanDetail';

function App() {
  return (
    <div id="root">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Routes>
      </main>
      <footer className="footer">© 2022 #VANLIFE</footer>
    </div>
  );
}

export default App;
