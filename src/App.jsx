import React, { useEffect, useLayoutEffect } from "react"
import { useLocation } from "react-router-dom"
import Header from "./components/layouts/Header"
import Footer from "./components/layouts/Footer"
import Routers from "./components/Router"
import ToTop from "./components/layouts/ToTop"
import AOS from 'aos'
import 'react-confirm-alert/src/react-confirm-alert.css'
import 'aos/dist/aos.css'
import Modal from "react-modal"

const App = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    AOS.init()
    Modal.setAppElement('body')
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
