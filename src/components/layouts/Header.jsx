import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiChevronDown, FiClock } from 'react-icons/fi'

const Header = () => {

  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar")
    const subnav = document.querySelector(".subnav")

    if (window.pageYOffset >= 20) {
      nav.classList.remove('bg-opacity-40')
      nav.classList.remove('bg-yellow-600')
      subnav.classList.remove('text-white')
      subnav.classList.remove('my-5')
      subnav.classList.add('my-3')
      nav.classList.add('bg-opacity-100')
      nav.classList.add('bg-white')
    } else {
      nav.classList.add('bg-opacity-40')
      nav.classList.add('bg-yellow-600')
      subnav.classList.add('text-white')
      subnav.classList.add('my-5')
      subnav.classList.remove('my-3')
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

  const dropdown = () => {
    const dp = document.querySelector('.drop')
    const dpt = document.querySelector('.droptwo')

    dp.classList.add('hidden')
    dp.classList.remove('flex')
    dpt.classList.add('hidden')
    dpt.classList.remove('flex')
  }

  return (
    <>
      <div className="bg-white py-2 ">
        <div className="flex w-[1200px] mx-auto px-2 items-center justify-between">
          <a href='https://iua.edu.sd' target="_blank" className='text-sm hover:text-yellow-600 hover:underline'>جامعة إفريقيا العالمية</a>
          <h3 className='flex gap-2 items-center'>{`${H} . ${M} . ${S}`} <FiClock /></h3>
        </div>
      </div>

      <nav className='bg-opacity-40 bg-yellow-600 sticky shadow top-0 duration-300 navbar z-50'>
        <div className="mx-auto w-[1200px] flex flex-row-reverse items-center justify-between">
          <Link onClick={() => dropdown()} to="/" className="flex-row-reverse flex gap-2 items-center">
            <img src="/logo.png" alt="logo_iua" className='w-8' />
            <h1 className='text-2xl font-bold text-yellow-900'>الدراسات الإسلامية</h1>
          </Link>
          <div className="flex flex-row-reverse gap-1 items-center text-white subnav my-5">
            <div onClick={() => { document.querySelector('.drop').classList.toggle('hidden'); document.querySelector('.drop').classList.toggle('flex'); document.querySelector('.droptwo').classList.add('hidden'); document.querySelector('.droptwo').classList.remove('flex') }} className="cursor-pointer px-3 py-2 dropdownqism text-sm rounded-md hover:bg-yellow-300 hover:bg-opacity-50 flex gap-1 items-center relative">
              <div className="flex-col items-end rounded-lg bg-yellow-300 subnav drop absolute w-max p-1 gap-1 right-0 top-[120%] hidden">
                <Link to="/hadith" className='px-3 py-2 border-b hover:bg-yellow-500 w-full text-end rounded-lg'>قسم السنة وعلوم الحديث</Link>
                <Link to="/dakwah" className='px-3 py-2 border-b hover:bg-yellow-500 w-full text-end rounded-lg'>قسم الدعوة والسيرة</Link>
                <Link to="/aqidah" className='px-3 py-2 hover:bg-yellow-500 w-full text-end rounded-lg'>قسم العقيدة والفكر الإسلامي</Link>
              </div>
              <FiChevronDown />
              أقسام الكلية
            </div>
            <div onClick={() => { document.querySelector('.droptwo').classList.toggle('hidden'); document.querySelector('.droptwo').classList.toggle('flex'); document.querySelector('.drop').classList.add('hidden'); document.querySelector('.drop').classList.remove('flex') }} className="cursor-pointer px-3 py-2 dropdownqism text-sm rounded-md hover:bg-yellow-300 hover:bg-opacity-50 flex gap-1 items-center relative">
              <div className="flex-col items-end rounded-lg w-52 bg-yellow-300 subnav droptwo absolute p-1 gap-1 right-0 top-[120%] hidden">
                <Link to="/about" className='px-3 py-2 border-b hover:bg-yellow-500 w-full text-end rounded-lg'>التعريف بالكلية</Link>
                <Link to="/haikal" className='px-3 py-2 border-b hover:bg-yellow-500 w-full text-end rounded-lg'>الهيكلة الإداري</Link>
                <Link to="/haiah" className='px-3 py-2 hover:bg-yellow-500 w-full text-end rounded-lg'>هيئة التدريس</Link>
              </div>
              <FiChevronDown />
              عن الكلية
            </div>
            <NavLink onClick={() => dropdown()} to="/qobul" style={active} className="px-3 py-2 text-sm rounded-md hover:bg-yellow-300 hover:bg-opacity-50">التسجيل والقبول</NavLink>
            <NavLink onClick={() => dropdown()} to="/kuliat" style={active} className="px-3 py-2 text-sm rounded-md hover:bg-yellow-300 hover:bg-opacity-50">الكليات المنتسبة</NavLink>
            <NavLink onClick={() => dropdown()} to="/dirasat" style={active} className="px-3 py-2 text-sm rounded-md hover:bg-yellow-300 hover:bg-opacity-50">الدراسات العليا</NavLink>
            <NavLink onClick={() => dropdown()} to="/programs" style={active} className="px-3 py-2 text-sm rounded-md hover:bg-yellow-300 hover:bg-opacity-50">البرامج</NavLink>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
