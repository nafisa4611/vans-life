import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import './App.css';
import Vans from './Components/Vans/Vans';
import VanDetail from './Components/VanDetail/VanDetail';
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <div id="root">
      <main>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetail />} />
          </Route>
        </Routes>
      </main>
      <footer className="footer">© 2022 #VANLIFE</footer>
    </div>
  );
}

export default App;
