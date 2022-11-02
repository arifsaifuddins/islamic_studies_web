import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const Header = () => {

  window.addEventListener("scroll", function () {
    const nav = document.querySelector(".navbar")
    const subnav = document.querySelector(".subnav")

    if (window.pageYOffset >= 20) {
      nav.classList.remove('bg-opacity-40')
      nav.classList.remove('bg-yellow-600')
      subnav.classList.remove('text-white')
      nav.classList.add('bg-opacity-100')
      nav.classList.add('bg-white')
    } else {
      nav.classList.add('bg-opacity-40')
      nav.classList.add('bg-yellow-600')
      subnav.classList.add('text-white')
      nav.classList.remove('bg-opacity-100')
      nav.classList.remove('bg-white')
    }
  })

  return (
    <>
      <div className="bg-white py-3 flex">
        <div className="flex flex-row-reverse gap-4 items-center mx-auto">
          <a href='https://iua.edu.sd' target="_blank" className='text-lg font-bold border-l-2 pl-4'>جـــامعـــــة إفـــــريقـــــيـــــا الـعــــــالمــــــيــــــة</a>
          <Link to="/" className='text-lg'>كلـــية الـدراســات الإســـلامـية</Link>
        </div>
      </div>

      <nav className='px-24 bg-opacity-40 bg-yellow-600 sticky shadow top-0 duration-300 navbar'>
        <div className="flex flex-row-reverse items-center justify-between">
          <Link to="/" className="flex-row-reverse flex gap-2 items-center my-6">
            <img src="/logo.png" alt="logo_iua" className='w-8' />
            <h1 className='text-3xl font-bold text-yellow-900'>الدراسات الإسلامية</h1>
          </Link>
          {/**
           * TODO
           * - make texts more bolder
           * - make logo bigger also
           */}
          <div className="flex flex-row-reverse gap-1 items-center text-white subnav">
            <NavLink to="/" className="px-3 py-2 text-sm rounded-md hover:bg-yellow-200 hover:bg-opacity-50">الرئيسية</NavLink>
            <NavLink to="/about" className="px-3 py-2 text-sm rounded-md hover:bg-yellow-200 hover:bg-opacity-50">عن الكلية</NavLink>
            <NavLink to="/aqsam" className="px-3 py-2 text-sm rounded-md hover:bg-yellow-200 hover:bg-opacity-50">أقسام الكلية</NavLink>
            <NavLink to="/haiah" className="px-3 py-2 text-sm rounded-md hover:bg-yellow-200 hover:bg-opacity-50">هيئة التدريس</NavLink>
            <NavLink to="/haikal" className="px-3 py-2 text-sm rounded-md hover:bg-yellow-200 hover:bg-opacity-50">الهيكل الإداري</NavLink>
            <NavLink to="/muktamarat" className="px-3 py-2 text-sm rounded-md hover:bg-yellow-200 hover:bg-opacity-50">المؤتمرات</NavLink>
            <NavLink to="/dirasat" className="px-3 py-2 text-sm rounded-md hover:bg-yellow-200 hover:bg-opacity-50">الـدراســات العليا</NavLink>
            <NavLink to="/news" className="px-3 py-2 text-sm rounded-md hover:bg-yellow-200 hover:bg-opacity-50">الأخبار</NavLink>
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
