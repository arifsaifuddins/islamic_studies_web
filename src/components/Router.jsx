import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Blank from './pages/Blank'
import About from './pages/about/About'
import Haiah from './pages/about/Haiah'
import Haikal from './pages/about/Haikal'
import Hadith from './pages/bachelor/Hadith'
import Dakwah from './pages/bachelor/Dakwah'
import Aqidah from './pages/bachelor/Aqidah'
import Programs from './pages/Programs'
import Contact from './pages/Contact'
import Qobul from './pages/Qobul'
import Kuliat from './pages/Kuliat'
import Program from './pages/details/Program'
import Profile from './pages/details/Profile'
import Bachelors from './pages/bachelor/Bachelors'
import DiplomaWasit from './pages/dirasatulya/DiplomasWasit'
import DiplomaUlya from './pages/dirasatulya/DiplomasUlya'
import Masters from './pages/dirasatulya/Masters'
import Doctorals from './pages/dirasatulya/Doctorals'
import { useCookies } from "react-cookie"
import { useState } from 'react'
import { useEffect } from 'react'
import Login from './pages/admin/Login'
import Admin from './pages/admin/Admin'

const Routers = () => {
  const [admin, setAdmin] = useState(false)
  const [cookies] = useCookies()

  useEffect(() => {
    if (cookies.admin && cookies.id_admin) {
      setAdmin(true)
    } else if (!cookies.admin) {
      setAdmin(false)
    }
  })

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qobul" element={<Qobul />} />
        <Route path="/kuliat" element={<Kuliat />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:id" element={<Program />} />

        <Route path="/about" element={<About />} />
        <Route path="/haiah" element={<Haiah />} />
        <Route path="/haiah/:id" element={<Profile />} />
        <Route path="/haikal" element={<Haikal />} />

        <Route path="/hadith" element={<Hadith />} />
        <Route path="/dakwah" element={<Dakwah />} />
        <Route path="/aqidah" element={<Aqidah />} />
        <Route path="/allqism" element={<Bachelors />} />

        <Route path="/diplomawasit" element={<DiplomaWasit />} />
        <Route path="/diplomaulya" element={<DiplomaUlya />} />
        <Route path="/master" element={<Masters />} />
        <Route path="/doctoral" element={<Doctorals />} />

        <Route path="/admin" element={admin ? <Admin /> : <Login />} />
        <Route path="*" element={<Blank />} />
      </Routes>
    </>
  )
}

export default Routers
