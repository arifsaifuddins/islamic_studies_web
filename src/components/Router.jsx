import React from 'react';
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Blank from './pages/Blank';
import About from './pages/About';
import Aqsam from './pages/Aqsam';
import Haiah from './pages/Haiah';
import Dirasat from './pages/Dirasat';
import Haikal from './pages/Haikal';
import Muktamarat from './pages/Muktamarat';
import Programs from './pages/Programs';
import Contact from './pages/Contact';

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/aqsam" element={<Aqsam />} />
        <Route path="/haiah" element={<Haiah />} />
        <Route path="/dirasat" element={<Dirasat />} />
        <Route path="/haikal" element={<Haikal />} />
        <Route path="/muktamarat" element={<Muktamarat />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Blank />} />
      </Routes>
    </>
  );
}

export default Routers;
