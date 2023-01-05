import Header from "./components/layouts/Header"
import Routers from "./components/Router"
import React, { useEffect, useLayoutEffect } from "react"
import Footer from "./components/layouts/Footer"
import { useLocation } from "react-router-dom"
import ToTop from "./components/layouts/ToTop"
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    AOS.init()
  }, [])

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Header />
      <Routers />
      <ToTop />
      <Footer />
    </>
  )
}

export default App
