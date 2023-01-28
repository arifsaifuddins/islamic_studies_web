import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiChevronDown, FiClock, FiMenu, FiX } from 'react-icons/fi'

const Header = () => {

  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar")
    const subnav = document.querySelector(".subnav")
    const ssubnav = document.querySelector(".ssubnav")

    if (window.pageYOffset >= 20) {
      nav.classList.remove('bg-opacity-40')
      nav.classList.remove('bg-yellow-600')
      subnav.classList.remove('text-white')
      ssubnav.classList.remove('py-5')
      ssubnav.classList.add('py-3')
      nav.classList.add('bg-opacity-100')
      nav.classList.add('bg-white')
    } else {
      nav.classList.add('bg-opacity-40')
      nav.classList.add('bg-yellow-600')
      subnav.classList.add('text-white')
      ssubnav.classList.add('py-5')
      ssubnav.classList.remove('py-3')
      nav.classList.remove('bg-opacity-100')
      nav.classList.remove('bg-white')
    }
  })

  const active = ({ isActive }) => ({ backgroundColor: isActive && 'rgb(253 224 71)' })

  const [H, setH] = useState(null)
  const [M, setM] = useState(null)
  const [S, setS] = useState(null)

  useEffect(() => {
    setInterval(clockTime, 1000)
  })

  const clockTime = () => {
    const time = new Date()

    let h = time.getHours()
    let m = time.getMinutes()
    let s = time.getSeconds()

    if (h < 10) h = '0' + h
    if (m < 10) m = '0' + m
    if (s < 10) s = '0' + s

    setH(h)
    setM(m)
    setS(s)
  }

  const dp = document.querySelector('.drop')
  const dpt = document.querySelector('.droptwo')
  const dpth = document.querySelector('.dropthree')

  const dropdown = () => {
    dp.classList.add('hidden')
    dp.classList.remove('flex')
    dpt.classList.add('hidden')
    dpt.classList.remove('flex')
    dpth.classList.add('hidden')
    dpth.classList.remove('flex')
  }

  const toggledrop1 = () => {
    dp.classList.toggle('hidden')
    dp.classList.toggle('flex')
    dpt.classList.add('hidden')
    dpt.classList.remove('flex')
    dpth.classList.add('hidden')
    dpth.classList.remove('flex')
  }

  const toggledrop2 = () => {
    dpt.classList.toggle('hidden')
    dpt.classList.toggle('flex')
    dp.classList.add('hidden')
    dp.classList.remove('flex')
    dpth.classList.add('hidden')
    dpth.classList.remove('flex')
  }

  const toggledrop3 = () => {
    dpth.classList.toggle('hidden')
    dpth.classList.toggle('flex')
    dp.classList.add('hidden')
    dp.classList.remove('flex')
    dpt.classList.add('hidden')
    dpt.classList.remove('flex')
  }

  const sidebar = () => {
    document.querySelector('.close-nav').classList.add('translate-x-full')
  }

  return (
    <>
      <div className="bg-white py-2">
        <div className="flex w-full xl:w-[1200px] mx-auto xl:px-2 text-xs xl:text-sm px-4 items-center justify-between">
          <a href='https://iua.edu.sd' target="_blank" className='hover:text-yellow-600 hover:underline'>جامعة إفريقيا العالمية</a>
          <h3 className='flex gap-2 items-center'>{`${S} . ${M} . ${H}`} <FiClock /></h3>
        </div>
      </div>
      <nav className='bg-opacity-40 bg-yellow-600 sticky shadow top-0 navbar z-50'>
        <div className="mx-auto w-full xl:px-0 px-4 xl:w-[1200px] flex flex-row items-center ssubnav py-5 justify-between">
          <Link onClick={() => dropdown()} to="/" className="flex-row flex gap-2 items-center">
            <img src="/logo.png" alt="logo_iua" className='xl:w-8 w-7 hidden lg:block' />
            <h1 className='xl:text-2xl text-xl font-bold text-yellow-900 hover:underline'>الدراسات الإسلامية</h1>
          </Link>
          <div className="lg:flex hidden flex-row gap-1 items-center text-white subnav">
            <div onClick={() => toggledrop1()} className="cursor-pointer py-2 px-3 text-sm rounded-md hover:bg-yellow-400 hover:bg-opacity-50 flex gap-1 items-center relative">
              <div className="flex-col rounded-lg w-52 bg-white text-slate-800 overflow-hidden drop absolute shadow right-0 top-[120%] hidden">
                <Link to="/about" className='py-2 px-3 hover:underline border-b w-full'>التعريف بالكلية</Link>
                <Link to="/haikal" className='py-2 px-3 hover:underline border-b w-full'>الهيكل الإداري</Link>
                <Link to="/haiah" className='py-2 px-3 hover:underline border-b w-full'>هيئة التدريس</Link>
              </div>
              <FiChevronDown />
              عن الكلية
            </div>
            <div onClick={() => toggledrop2()} className="cursor-pointer py-2 px-3 text-sm rounded-md hover:bg-yellow-400 hover:bg-opacity-50 flex gap-1 items-center relative">
              <div className="flex-col rounded-lg bg-white text-slate-800 droptwo overflow-hidden absolute w-max shadow right-0 top-[120%] hidden">
                <Link to="/allqism" className='py-2 px-3 hover:underline border-b w-full'>جميع التخصصات</Link>
                <Link to="/hadith" className='py-2 px-3 hover:underline border-b w-full'>قسم السنة وعلوم الحديث</Link>
                <Link to="/dakwah" className='py-2 px-3 hover:underline border-b w-full'>قسم الدعوة والسيرة</Link>
                <Link to="/aqidah" className='py-2 px-3 hover:underline border-b w-full'>قسم العقيدة والفكر الإسلامي</Link>
              </div>
              <FiChevronDown />
              البكالوريوس
            </div>
            <div onClick={() => toggledrop3()} className="cursor-pointer py-2 px-3 text-sm rounded-md hover:bg-yellow-400 hover:bg-opacity-50 flex gap-1 items-center relative">
              <div className="flex-col rounded-lg w-52 bg-white text-slate-800 overflow-hidden dropthree absolute shadow right-0 top-[120%] hidden">
                <Link to="/diplomawasit" className='py-2 px-3 hover:underline border-b w-full'>الدبلومات الوسيطة</Link>
                <Link to="/diplomaulya" className='py-2 px-3 hover:underline border-b w-full'>الدبلومات العليا</Link>
                <Link to="/master" className='py-2 px-3 hover:underline border-b w-full'>الماجستير</Link>
                <Link to="/doctoral" className='py-2 px-3 hover:underline border-b w-full'>الدكتوراه</Link>
              </div>
              <FiChevronDown />
              الدراسات العليا
            </div>
            <NavLink onClick={() => dropdown()} to="/qobul" style={active} className="py-2 px-3 text-sm rounded-md hover:bg-yellow-400 hover:bg-opacity-50">التسجيل والقبول</NavLink>
            <NavLink onClick={() => dropdown()} to="/kuliat" style={active} className="py-2 px-3 text-sm rounded-md hover:bg-yellow-400 hover:bg-opacity-50">الكليات المنتسبة</NavLink>
            <NavLink onClick={() => dropdown()} to="/programs" style={active} className="py-2 px-3 text-sm rounded-md hover:bg-yellow-400 hover:bg-opacity-50">البرامج</NavLink>
          </div>
          <div className="text-2xl text-yellow-900 lg:hidden cursor-pointer hover:text-yellow-700" onClick={() => document.querySelector('.close-nav').classList.remove('translate-x-full')}>
            <FiMenu />
          </div>
        </div>
      </nav>
      <div className="fixed lg:hidden transition-transform translate-x-full close-nav z-50 top-0 right-0 left-0 bg-white flex-col">
        <div className="bg-white py-2 border-b">
          <div className="flex w-full xl:w-[1200px] mx-auto xl:px-2 text-xs xl:text-sm px-4 items-center justify-between">
            <a href='https://iua.edu.sd' target="_blank" className='hover:text-yellow-600 hover:underline'>جامعة إفريقيا العالمية</a>
            <h3 className='flex gap-2 items-center'>{`${S} . ${M} . ${H}`} <FiClock /></h3>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center px-4 py-5 border-b">
          <Link className='text-yellow-600 hover:underline text-bold text-xl' to="/" onClick={() => sidebar()}>كلية الدراسات الإسلامية</Link>
          <div className="text-2xl text-yellow-900 cursor-pointer hover:text-yellow-700" onClick={() => sidebar()}>
            <FiX />
          </div>
        </div>
        <div className="flex flex-col w-full text-slate-800 pb-40 px-4 h-[100vh] overflow-y-scroll">
          <div className="py-3 text-yellow-600 flex justify-between items-center w-full border-b">
            <p>عن الكلية</p>
            <FiChevronDown />
          </div>
          <div className="flex-col flex w-full p-2 gap-2 border-b">
            <Link to="/about" className='w-full rounded-lg border hover:underline p-2' onClick={() => sidebar()}>التعريف بالكلية</Link>
            <Link to="/haikal" className='w-full rounded-lg border hover:underline p-2' onClick={() => sidebar()}>الهيكل الإداري للكلية</Link>
            <Link to="/haiah" className='w-full rounded-lg border hover:underline p-2' onClick={() => sidebar()}>هيئة التدريس للكلية</Link>
          </div>
          <div className="py-3 text-yellow-600 flex justify-between items-center w-full border-b">
            <p>البكالوريوس</p>
            <FiChevronDown />
          </div>
          <div className="flex-col  w-full p-2 gap-2 border-b flex">
            <Link to="/allqism" className='w-full rounded-lg border hover:underline p-2' onClick={() => sidebar()}>جميع التخصصات</Link>
            <Link to="/hadith" className='w-full rounded-lg border hover:underline p-2' onClick={() => sidebar()}>قسم السنة وعلوم الحديث</Link>
            <Link to="/dakwah" className='w-full rounded-lg border hover:underline p-2' onClick={() => sidebar()}>قسم الدعوة والسيرة</Link>
            <Link to="/aqidah" className='w-full rounded-lg border hover:underline p-2' onClick={() => sidebar()}>قسم العقيدة والفكر الإسلامي</Link>
          </div>
          <div className="py-3 text-yellow-600 flex justify-between items-center w-full border-b">
            <p>الدراسات العليا</p>
            <FiChevronDown />
          </div>
          <div className="flex-col  w-full p-2 gap-2 border-b flex">
            <Link to="/diplomawasit" className='w-full rounded-lg border hover:underline p-2' onClick={() => sidebar()}>الدبلومات الوسيطة</Link>
            <Link to="/diplomaulya" className='w-full rounded-lg border hover:underline p-2' onClick={() => sidebar()}>الدبلومات العليا</Link>
            <Link to="/master" className='w-full rounded-lg border hover:underline p-2' onClick={() => sidebar()}>الماجستير</Link>
            <Link to="/doctoral" className='w-full rounded-lg border hover:underline p-2' onClick={() => sidebar()}>الدكتوراه</Link>
          </div>
          <Link to="/qobul" onClick={() => sidebar()} className="py-3 text-yellow-600 w-full hover:underline border-b">التسجيل والقبول</Link>
          <Link to="/kuliat" onClick={() => sidebar()} className="py-3 text-yellow-600 w-full hover:underline border-b">الكليات المنتسبة</Link>
          <Link to="/programs" onClick={() => sidebar()} className="py-3 text-yellow-600 w-full hover:underline border-b">البرامج والأخبار والمؤتمرات</Link>
        </div>
      </div>
    </>
  )
}

export default Header
