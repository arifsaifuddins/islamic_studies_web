import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

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

  return (
    <>
      <div className="bg-white py-2 flex">
        <div className="flex flex-row-reverse gap-4 items-center mx-auto">
          <a href='https://iua.edu.sd' target="_blank" className='font-bold'>جامعة إفريقيا العالمية</a>
          <Link to="/home" className='border-r-2 pr-4'>كلية الدراسات الإسلامية</Link>
        </div>
      </div>

      <nav className='bg-opacity-40 bg-yellow-600 sticky shadow top-0 duration-300 navbar'>
        <div className="mx-auto w-[1200px] flex flex-row-reverse items-center justify-between">
          <Link to="/home" className="flex-row-reverse flex gap-2 items-center">
            <img src="/logo.png" alt="logo_iua" className='w-8' />
            <h1 className='text-3xl font-bold text-yellow-900'>الدراسات الإسلامية</h1>
          </Link>
          {/**
           * TODO
           * - make texts more bolder
           * - make logo bigger also
           */}
          <div className="flex flex-row-reverse gap-1 items-center text-white subnav">
            <NavLink to="/" style={active} className="px-3 py-2 text-sm rounded-md hover:bg-yellow-200 hover:bg-opacity-50">الرئيسية</NavLink>
            <NavLink to="/about" style={active} className="px-3 py-2 text-sm rounded-md hover:bg-yellow-200 hover:bg-opacity-50">عن الكلية</NavLink>
            <NavLink to="/aqsam" style={active} className="px-3 py-2 text-sm rounded-md hover:bg-yellow-200 hover:bg-opacity-50">أقسام الكلية</NavLink>
            <NavLink to="/haiah" style={active} className="px-3 py-2 text-sm rounded-md hover:bg-yellow-200 hover:bg-opacity-50">هيئة التدريس</NavLink>
            <NavLink to="/haikal" style={active} className="px-3 py-2 text-sm rounded-md hover:bg-yellow-200 hover:bg-opacity-50">الهيكل الإداري</NavLink>
            <NavLink to="/muktamarat" style={active} className="px-3 py-2 text-sm rounded-md hover:bg-yellow-200 hover:bg-opacity-50">المؤتمرات</NavLink>
            <NavLink to="/dirasat" style={active} className="px-3 py-2 text-sm rounded-md hover:bg-yellow-200 hover:bg-opacity-50">الـدراســات العليا</NavLink>
            <NavLink to="/news" style={active} className="px-3 py-2 text-sm rounded-md hover:bg-yellow-200 hover:bg-opacity-50">الأخبار</NavLink>
            <div className="px-3 py-2 rounded-md hover:bg-yellow-200 hover:bg-opacity-50" >
              <FiSearch />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
