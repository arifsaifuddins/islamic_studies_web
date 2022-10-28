import Header from "./components/layouts/Header"
import Routers from "./components/Router"
import React, { useLayoutEffect } from "react"
import Footer from "./components/layouts/Footer"
import { useLocation } from "react-router-dom"
import ToTop from "./components/layouts/ToTop"

const App = () => {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className='font-[tajawal] text-slate-700'>
      <Header />
      <Routers />
      <ToTop />
      <Footer />
    </div>
  )
}

export default App
