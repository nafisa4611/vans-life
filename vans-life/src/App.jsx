import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import './App.css';
import Vans from './Components/Vans/Vans';
import VanDetail from './Components/VanDetail/VanDetail';
import Layout from './Components/Layout/Layout';
import HostLayout from './Components/HostLayout/HostLayout';
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income';
import MyVan from './Components/MyVan/MyVan';
import Price from './Components/Price/Price'; // Import Price component
import MyVanDetail from './Components/MyVanDetail/MyVanDetail';
import MyVanPhotos from './Components/MyVanPhotos/MyVanPhotos';
import MyVanPricing from './Components/MyVanPricing/MyVanPricing';
import MyVanId from './Components/MyVanId/MyVanId';

function App() {
  return (
    <div id="root">
      <main>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />
            {/* Host Routes */}
            <Route path="/host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="price" element={<Price />} />
              <Route path="my-van" element={<MyVan />} />
            {/* Nested MyVanId Route */}
              <Route path="my-van/:id" element={<MyVanId />}>
                <Route index element={<MyVanDetail />} />
                <Route path='detail' element={<MyVanDetail />} />
                <Route path="pricing" element={<MyVanPricing />} />
                <Route path="photos" element={<MyVanPhotos />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </main>
      <footer className="footer">© 2022 #VANLIFE</footer>
    </div>
  );
}

export default App;
