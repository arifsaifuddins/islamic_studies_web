import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Blank from './pages/Blank'
import About from './pages/About'
import Hadith from './pages/Hadith'
import Haiah from './pages/Haiah'
import Dirasat from './pages/Dirasat'
import Haikal from './pages/Haikal'
import Aqidah from './pages/Aqidah'
import Programs from './pages/Programs'
import Contact from './pages/Contact'
import Dakwah from './pages/Dakwah'
import Qobul from './pages/Qobul'
import Kuliat from './pages/Kuliat'
import Program from './pages/details/Program'
import Profile from './pages/details/Profile'

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qobul" element={<Qobul />} />
        <Route path="/about" element={<About />} />
        <Route path="/haiah" element={<Haiah />} />
        <Route path="/haiah/:id" element={<Profile />} />
        <Route path="/haikal" element={<Haikal />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:id" element={<Program />} />
        <Route path="/hadith" element={<Hadith />} />
        <Route path="/dakwah" element={<Dakwah />} />
        <Route path="/aqidah" element={<Aqidah />} />
        <Route path="/kuliat" element={<Kuliat />} />
        <Route path="/dirasat" element={<Dirasat />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Blank />} />
      </Routes>
    </>
  )
}

export default Routers
